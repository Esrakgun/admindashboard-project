import {
  GetOrdersResponse,
  GetProductsResponse,
  GetUsersResponse,
  GetProductResponse,
  Product,
  GetUserResponse,
} from "@/types";

const API_URL = "http://localhost:4000";

// Bütün Siparişleri Getir:
const getOrders = async (): GetOrdersResponse => {
  const res = await fetch(`${API_URL}/orders`);
  // console.log(await res.json());

  return res.json();
};

const getProducts = async (): GetProductsResponse => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};
// !Sil Butonu
const deleteProduct = async (productId: string) => {
  const res = await fetch(`${API_URL}/products/${productId}`, {
    method: "DELETE",
  });
  return res.json();
};

// !Edit Düzenle Butonu
const getProduct = async (productId: string): GetProductResponse => {
  const res = await fetch(`${API_URL}/products/${productId}`);
  return res.json();
};

// Oluştur Ürün /Ekle:
const createProduct = async (product: Omit<Product, "id">) => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

// Güncelle /Edit:
const updateProduct = async (id: string, product: Omit<Product, "id">) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(product),
  });
  return res.json();
};

// Kullanıcı Bilgilerini Çağırmayı Sağlıyacak:
const getUsers = async (): GetUsersResponse => {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
};

// BanUser ile silme yapılcak:
const BanUser = async (id: string) => {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });
  return res.json();
};


// Tek kullanıcın bilgilerini çağırmayı sağlıyacak:
const getUser = async (id: string): GetUserResponse => {
  const res = await fetch(`${API_URL}/users/${id}`);
  return res.json();
};

export {
  getOrders,
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getUsers,
  getUser,
  BanUser,
};
