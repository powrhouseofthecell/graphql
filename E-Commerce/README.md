<h1 align="center">GraphQL | Apollo-Sever  <img alt="GraphQL" src="https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white" /> </h1>

  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/powrhouseofthecell/GraphQL/tree/main/E-Commerce#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
   <br>
 An E-Commerce API made with GraphQL and  Apollo-Server

### 🏠 [Homepage](https://github.com/powrhouseofthecell/GraphQL/tree/main/E-Commerce#readme)

## Install

###### Install all dependicies

```sh
npm install
```

## Usage

```sh
npm start
```

### Some example queries.

```
# 1. Products query for name and price.

query Query {
   products {
      name
      price
   }
}
```

```
# 2. Delete product mutation.

mutation Mutation($deleteProductId: ID!) {
  deleteProduct(id: $deleteProductId)
}
```

```
# 3. Add product mutation.

mutation AddProduct {
   addProduct(input: {
      name: "An amazing product name",
      description: "This is an amazing product",
      quantity: 1,
      image: "image.com",
      price: 123.2,
      onSale: true,
      categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d"}) {
         name
   }
}
```

```
# 4. Update category mutation.

mutation UpdateCategory($updateCategoryId: ID!, $input: UpdateCategoryInput!) {
  updateCategory(id: $updateCategoryId, input: $input) {
    name
  }
}
```

## Author

👤 **Zuhaib**

-  Website: [zuhaib.live](https://zuhaib.live)
-  Twitter: [@shahzuhaib\_](https://twitter.com/shahzuhaib_)
-  Github: [@powrhouseofthecell](https://github.com/powrhouseofthecell)
-  LinkedIn: [@zuhaibnazir](https://linkedin.com/in/zuhaibnazir)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/powrhouseofthecell/GraphQL/issues). You can also take a look at the [contributing guide](https://github.com/powrhouseofthecell/GraphQL/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Zuhaib](https://github.com/powrhouseofthecell).<br />
