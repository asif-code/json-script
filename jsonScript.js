const data = [
  {
    dataa1: [
      {
        product: "apple",
        productDetials: [
          {
            model: "13 pro",
            price: 80000,
            modelNumber: 20220321,
            color: "black",
          },
          {
            model: "13",
            price: 70000,
            modelNumber: 20201210,
            color: "black",
          },
          {
            model: "13 pro max",
            price: 90000,
            modelNumber: 2021,
            color: "black",
          },
        ],
      },
      {
        product: "samsung",
        productDetials: [
          {
            model: "s10",
            price: 90000,
            modelNumber: 2022765,
            color: "black",
          },
          {
            model: "s9",
            price: 70000,
            modelNumber: 2020876,
            color: "black",
          },
          {
            model: "s8",
            price: 60000,
            modelNumber: 2021765,
            color: "black",
          },
        ],
      },
      {
        product: "oneplus",
        productDetials: [
          {
            model: "7 pro",
            price: 40000,
            modelNumber: 2022765,
            color: "black",
          },
          {
            model: "8 pro",
            price: 50000,
            modelNumber: 2020876,
            color: "black",
          },
          {
            model: "9 pro",
            price: 60000,
            modelNumber: 2021765,
            color: "black",
          },
        ],
      },
    ],
    dataa2: [
      {
        product: "apple",
        productDetials: [
          {
            model: "13 pro",
            price: 80000,
            modelNumber: 20220321,
            color: "green",
          },
          {
            model: "13",
            price: 70000,
            modelNumber: 202034210,
            color: "green",
          },
          {
            model: "13 pro max",
            price: 90000,
            modelNumber: 20443221,
            color: "green",
          },
        ],
      },
      {
        product: "samsung",
        productDetials: [
          {
            model: "s10",
            price: 90000,
            modelNumber: 20332765,
            color: "green",
          },
          {
            model: "s9",
            price: 70000,
            modelNumber: 20343876,
            color: "green",
          },
          {
            model: "s8",
            price: 60000,
            modelNumber: 20254765,
            color: "green",
          },
        ],
      },
      {
        product: "oneplus",
        productDetials: [
          {
            model: "7 pro",
            price: 40000,
            modelNumber: 2022765,
            color: "green",
          },
          {
            model: "8 pro",
            price: 50000,
            modelNumber: 2020876,
            color: "green",
          },
          {
            model: "9 pro",
            price: 60000,
            modelNumber: 2021765,
            color: "green",
          },
        ],
      },
    ],
    dataa3: [
      {
        product: "apple",
        productDetials: [
          {
            model: "13 pro",
            price: 80000,
            modelNumber: 20220321,
            color: "yellow",
          },
          {
            model: "13",
            price: 70000,
            modelNumber: 20201210,
            color: "yellow",
          },
          {
            model: "13 pro max",
            price: 90000,
            modelNumber: 2021,
            color: "yellow",
          },
        ],
      },
      {
        product: "samsung",
        productDetials: [
          {
            model: "s10",
            price: 90000,
            modelNumber: 2022765,
            color: "yellow",
          },
          {
            model: "s9",
            price: 70000,
            modelNumber: 2020876,
            color: "yellow",
          },
          {
            model: "s8",
            price: 60000,
            modelNumber: 2021765,
            color: "yellow",
          },
        ],
      },
      {
        product: "oneplus",
        productDetials: [
          {
            model: "7 pro",
            price: 40000,
            modelNumber: 2022765,
            color: "yellow",
          },
          {
            model: "8 pro",
            price: 50000,
            modelNumber: 2020876,
            color: "yellow",
          },
          {
            model: "9 pro",
            price: 60000,
            modelNumber: 2021765,
            color: "yellow",
          },
        ],
      },
    ],
  },
];

function Data(userInput) {
  const getData = [];
  // loop over the data array and filter the elements based on user input
  for (const dataa of data) {
    for (const [key, value] of Object.entries(dataa)) {
      const getProductDetails = [];
      // filter the product details based on  user input
      for (const product of value) {
        if (userInput.product && userInput.product === product.product) {
          getProductDetails.push(...product.productDetials);
        } else if (userInput.color) {
          getProductDetails.push(
            ...product.productDetials.filter(
              (detail) => detail.color === userInput.color
            )
          );
        } else if (userInput.model) {
          getProductDetails.push(
            ...product.productDetials.filter(
              (detail) => detail.model === userInput.model
            )
          );
        } else if (userInput.modelNumber) {
          getProductDetails.push(
            ...product.productDetials.filter(
              (detail) => detail.model === userInput.modelNumber
            )
          );
        } else if (userInput.price) {
          getProductDetails.push(
            ...product.productDetials.filter(
              (detail) => detail.price === userInput.price
            )
          );
        }
      }

      if (getProductDetails.length > 0) {
        getData.push({ [key]: getProductDetails });
      }
    }
  }

  if (getData.length === 0) {
    throw new Error(`No Data Found ${inputProduct} `);
  }
  return getData;
}

// Exception Handling
try {
  let inputProduct = { product: prompt(`Enter The Product`) };
  //   let inputModel = { model: prompt(`Enter The Model`) };
  //   let inputColor = { color: prompt(`Enter The Color`) };
  //   let inputModelNumber = { modelNumber: 2021765 };
  //   let inputPrice = { price: Number(prompt(`Enter The Price`)) };

  console.log(`Product`, Data(inputProduct));
  //   console.log(`Model: `, Data(inputModel));
  //   console.log(`Color: `, Data(inputColor));
  //   console.log(`Model Number: `, Data(inputModelNumber));
  //   console.log(`Price: `, Data(inputPrice));
} catch (error) {
  console.error(error);
}
