from src.routes import router

@router.get("/users")
def read_users():
    return {
        "data": {
            "users" : {
                "id" : 1
            }
        }
    }
