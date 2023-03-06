import { Stack } from "@mui/material"
import { useGetData } from "../hooks/useGetData"
import { Product } from "./Product"


export const Products = () => {
  const { products } = useGetData()
  return (
    <Stack direction="row" gap="2rem" flexWrap="wrap">
      {products.map((item) => (
        <Product key={item.id} product={item} />
      ))}

    </Stack>
  )
}
