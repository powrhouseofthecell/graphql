const Product = {
   category: ({ categoryId: id }, args, { categories }) => {
      return categories.find(category => category.id === id);
   },
   reviews: ({ id }, args, { reviews }) => {
      return reviews.filter(review => review.productId === id);
   },
};

export default Product;
