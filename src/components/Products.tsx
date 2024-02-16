import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store'; // Import AppDispatch type
import { fetchProducts } from '../store/products';

export default function Products() {
    const dispatch: AppDispatch = useDispatch(); // Explicitly type dispatch with AppDispatch
    const products = useSelector((state: RootState) => state.products.data);
    const loading = useSelector((state: RootState) => state.products.loading);
    const error = useSelector((state: RootState) => state.products.error);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div>
        <h2>Products</h2>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>{product.title}</div>
            <div>${product.price}</div>
            <div>{product.description}</div>
          </div>
        ))}
      </div>
    );
}
