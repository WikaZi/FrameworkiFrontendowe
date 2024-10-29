
export default function AppReducer(state, action) {
    switch (action.type) {
        case "edit":
            
            return state.map(car => 
                car.id === action.payload.id ? { ...car, ...action.payload.data } : car
            );
        case "rate":
            
            return state.map(car =>
                car.id === action.payload.id ? { ...car, rating: action.payload.rating } : car
                
            );
        case "delete":
            
            return state.filter(car => car.id !== action.payload.id);
        default:
            return state; 
    }
}
