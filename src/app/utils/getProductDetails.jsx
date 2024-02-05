
import { revalidatePath } from "next/cache"
import { client } from "../../../sanity/lib/client"
import { cookies } from "next/headers"


export async function getProductDetails(){
  cookies()
  const postdata = await client.fetch(`*[_type == "products"]{

    productname,
    ProductDescription,
    ProductPrice,
    _id,
    Image{
      asset{
        _ref
      }
    }
  }`)
  return postdata

}

