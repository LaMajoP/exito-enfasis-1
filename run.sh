#!/bin/bash

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Iniciando backend..."
cd "$PROJECT_DIR/backend"
uvicorn main:app --reload &
BACKEND_PID=$!

echo "Iniciando frontend..."
cd "$PROJECT_DIR/frontend"
python -m http.server 5500 &
FRONTEND_PID=$!

echo ""
echo "================================"
echo " Backend:  http://127.0.0.1:8000"
echo " Swagger:  http://127.0.0.1:8000/docs"
echo " Frontend: http://localhost:5500"
echo "================================"
echo ""
echo "Presiona Ctrl+C para detener todo."

trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null" SIGINT SIGTERM

wait