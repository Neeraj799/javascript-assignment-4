
  var productData = [
    {
      id: "1",
      name: "Men Navy Blue Solid Sweatshirt",
      preview:
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      photos: [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
      ],
      description:
        "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
      size: [1, 1, 0, 1, 0],
      isAccessory: false,
      brand: "United Colors of Benetton",
      price: 2599,
    },
  ];
  var content1 = document.getElementById("content1");
  content1.className = "part1";
  
  var content2 = document.getElementById("content2");
  content2.className = "part2";
  
  function getProducts() {
    for (var i = 0; i < productData.length; i++) {
      var ProductImage = document.createElement("img");
      ProductImage.src = productData[i].preview;
      content1.appendChild(ProductImage);
  
      var productDetails = document.createElement("div");
      productDetails.className = "product-details";
      content2.appendChild(productDetails);
  
      var pName = document.createElement("h1");
      pName.innerText = productData[i].name;
      productDetails.appendChild(pName);
  
      var pBrand = document.createElement("h4");
      pBrand.innerText = productData[i].brand;
      productDetails.appendChild(pBrand);
  
      var price = document.createElement("h3");
      price.innerText = "Price: Rs ";
      var span = document.createElement("span");
      span.className = "spanPrice";
      span.innerText = productData[i].price;
      price.appendChild(span);
      productDetails.appendChild(price);
  
      var productDescription = document.createElement("div");
      productDescription.className = "product-description";
      productDetails.appendChild(productDescription);
  
      var desc = document.createElement("h3");
      desc.innerText = "Description";
      productDescription.appendChild(desc);
  
      var description = document.createElement("p");
      description.innerText = productData[i].description;
      productDescription.appendChild(description);
  
      var productPreview = document.createElement("div");
      productPreview.className = "product-preview";
      productDetails.appendChild(productPreview);
  
      var pPreview = document.createElement("h3");
      pPreview.innerText = "Product Preview";
      productPreview.appendChild(pPreview);
  
      var previewImage = document.createElement("div");
      previewImage.className = "preview-image";
      productPreview.appendChild(previewImage);
  
      var pImage1 = document.createElement("img");
      pImage1.src = productData[i].photos[0];
      pImage1.className = "active";
      previewImage.appendChild(pImage1);
  
      var pImage2 = document.createElement("img");
      pImage2.src = productData[i].photos[1];
      previewImage.appendChild(pImage2);
  
      var pImage3 = document.createElement("img");
      pImage3.src = productData[i].photos[2];
      previewImage.appendChild(pImage3);
  
      var pImage4 = document.createElement("img");
      pImage4.src = productData[i].photos[3];
      previewImage.appendChild(pImage4);
  
      var pImage5 = document.createElement("img");
      pImage5.src = productData[i].photos[4];
      previewImage.appendChild(pImage5);
  
      console.log(productData[i]);
  
      function changeImage() {
        pImage1.addEventListener("click", function () {
          ProductImage.src = productData[i].photos[0];
          setActiveImage(pImage1);
        });
        pImage2.addEventListener("click", function () {
          ProductImage.src = productData[i].photos[1];
          setActiveImage(pImage2);
        });
        pImage3.addEventListener("click", function () {
          ProductImage.src = productData[i].photos[2];
          setActiveImage(pImage3);
        });
        pImage4.addEventListener("click", function () {
          ProductImage.src = productData[i].photos[3];
          setActiveImage(pImage4);
        });
        pImage5.addEventListener("click", function () {
          ProductImage.src = productData[i].photos[4];
          setActiveImage(pImage5);
        });
        $(document).on("click", ".preview-image img", function () {
          $(this).addClass("active").siblings().removeClass("active");
        });
      }
  
      changeImage();
    }
  }
  getProducts();
  
  function setActiveImage(activeImage) {
    const previewImages = document.querySelectorAll(".preview-image img");
    previewImages.forEach((image) => {
      image.classList.remove("active");
    });
    activeImage.classList.add("active");
  }
  document.addEventListener("DOMContentLoaded", function () {
    const previewImages = document.querySelectorAll(".preview-image img");
    previewImages.forEach((image) => {
      image.addEventListener("click", function () {
        setActiveImage(image);
      });
    });
  });
  
