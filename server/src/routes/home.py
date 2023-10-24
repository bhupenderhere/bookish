from src.routes import router

@router.get("/")
def home():
    return {"data": "home"}
