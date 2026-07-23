from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import os, hmac, hashlib, time, base64
from dotenv import load_dotenv

load_dotenv()

router = APIRouter(prefix="/site-access", tags=["SiteAccess"])
SITE_SECRET = os.getenv("SITE_SECRET", "change-moi")
TOKEN_VALIDITY_SECONDS = 60 * 60 * 12

class AccessRequest(BaseModel):
    password: str

class TokenRequest(BaseModel):
    token: str

def _sign(expiry: int) -> str:
    sig = hmac.new(SITE_SECRET.encode(), str(expiry).encode(), hashlib.sha256).hexdigest()
    return base64.urlsafe_b64encode(f"{expiry}.{sig}".encode()).decode()

def _verify(token: str) -> bool:
    try:
        raw = base64.urlsafe_b64decode(token.encode()).decode()
        expiry_str, sig = raw.split(".", 1)
        expected = hmac.new(SITE_SECRET.encode(), expiry_str.encode(), hashlib.sha256).hexdigest()
        if not hmac.compare_digest(sig, expected):
            return False
        return time.time() < int(expiry_str)
    except Exception:
        return False

@router.post("/login")
async def login(data: AccessRequest):
    site_password = os.getenv("SITE_PASSWORD")  # lu à chaque appel
    if not site_password or data.password != site_password:
        raise HTTPException(status_code=401, detail="Mot de passe incorrect")
    return {"token": _sign(int(time.time()) + TOKEN_VALIDITY_SECONDS)}

@router.post("/verify")
async def verify(data: TokenRequest):
    if not _verify(data.token):
        raise HTTPException(status_code=401, detail="Session invalide")
    return {"valid": True}