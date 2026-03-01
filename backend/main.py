import uvicorn
from fastapi import FastAPI
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

class ExplainRequest(BaseModel):
    text: str = Field(..., min_length=10, max_length=5000)

class ExplainResponse(BaseModel):
    simplified_text: str


app = FastAPI()

origins = [
   "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/explain", response_model=ExplainResponse)
async def explain(request: ExplainRequest):
    simplified = "test simplified explanation"
    return ExplainResponse(simplified_text=simplified)

if __name__ == "__main__":
    load_dotenv()
    uvicorn.run(app, host="0.0.0.0", port=8000)