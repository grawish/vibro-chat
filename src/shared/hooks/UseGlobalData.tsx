import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  decrementState,
  GlobalDataState,
  incrementState,
} from "../../store/slices/globalDataSlice";

const useGlobalData = () => {
  const dispatch = useDispatch();
  const globalData = useSelector(
    (state: RootState): GlobalDataState => state.globalData
  );

  const increment = () => {
    dispatch(incrementState());
  };

  const decrement = () => {
    dispatch(decrementState());
  };

  const incrementByAmount = (amount: number) => {
    dispatch({ type: "INCREMENT_BY_AMOUNT", payload: amount });
  };

  const decrementByAmount = (amount: number) => {
    dispatch({ type: "DECREMENT_BY_AMOUNT", payload: amount });
  };

  return {
    globalData,
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
  };
};

export default useGlobalData;
