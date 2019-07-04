#Name: Hai Truong

#Inter Pyco

#Describe: Back End(NodeJS), orderpizza

#Describe API abc

|           | Localhost                   | Method      | Describe      
| --------- | --------------------------- | ----------- | ---
| Category  | localhost:3000/category/{id}| Method: GET | Get category by ID(lấy sản phẩm có cùng id, client trả về ID của category)
|           | localhost:3000/categories   | Method: GET | Get all categories(lấy toàn bộ category có những sản phẩm nào)
| --------- | --------------------------- | ----------- | ---
| Product   | localhost:3000/products     | Method: GET | Get all products (lấy toàn bộ sản phẩm)
|           | localhost:3000/product{id}  | Method: GET | Get product by ID (lấy sản phẩm theo ID)
| --------- | --------------------------- | ----------- | ---
|Customer   | localhost:3000/login        | Method: POST| Customer login
|           | localhost:3000/register     | Method: POST| Customer register
|           | localhost:3000/updateName| Method: PUT | Customer update profile
| --------- | --------------------------- | ----------- | ---
|Order      | localhost:3000/createOrder  | Method: POST| Customer create order by authetication
|           | localhost:3000/xxxxxx       | Method: GET | Customer view them order
| --------- | --------------------------- | ----------- | ---
| Topping   | localhost:3000/toppings     | Method: GET | Customer get all toppings 
|           | localhost:3000/topping{id}  | Method: GET | Customer get topping by ID