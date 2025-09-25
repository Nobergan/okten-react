import { useEffect } from 'react';
import { loadAuthProducts, refresh } from '../services/api.service.ts';

// Component that loads products requiring authentication
export const AuthResourcesPage = () => {
  useEffect(() => {
    // Load products
    loadAuthProducts()
      .then((products) => {
        // Log products if successful
        console.log(products);
      })
      .catch((reason) => {
        // Log error if request fails
        console.log(reason);

        // Refresh tokens and retry request
        refresh()
          .then(() => loadAuthProducts())
          .then((value) => console.log(value));
      });
  }, []);

  return <>AuthResourcesPage</>;
};
