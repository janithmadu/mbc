import { client } from "../../sanity/lib/client"


export async function getProductDetails(){

  const postdata = await client.fetch(`* [_type == "products"][0]{

    productname,
    ProductDescription,
    _id,
    Image{
      asset{
        _ref
      }
    }
  }`)
  return postdata

}

