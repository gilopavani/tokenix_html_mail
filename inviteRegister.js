function inviteRegister(userName, tokenLink) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Confirmação de Conta</title>
  </head>
  <body
    style="
      font-family: Roboto;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    "
  >
    <div style="max-width: 600px; margin: 0 auto; padding: 20px">
      <div style="display: flex; justify-content: center; align-items: center">
        <svg
          width="195"
          height="84"
          viewBox="0 0 165 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.9592 21.7439L3.56236 24.6939L3.61961 33.9163L11.6072 38.4483L25.9635 29.8387V28.9836V26.2331L28.2822 24.865L28.955 24.4659L28.912 20.3472L31.8606 22.0289V24.2522L32.9055 24.865L35.2242 26.2331V28.9836V31.7342L32.9055 33.1023L30.601 34.4705L28.2822 33.1023L27.1658 32.4325L11.5499 42.0681L0.5 35.712V22.77L8.9592 17.9815V21.7439Z"
            fill="#32065B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.0256 7.16466L23.3444 8.5328L25.6631 9.91519V12.6515V13.5921L41.508 22.77V35.6901L30.5297 42.1888L22.2852 37.1722L25.3626 35.3338L30.7158 38.4406L38.4171 33.8659V24.3662L24.1459 16.2998L23.3444 16.7701L21.0256 18.1525L18.7212 16.7701L18.1629 16.4424L14.5273 18.4233V14.7322L16.4024 13.7346V12.6515V9.91519L18.7212 8.5328L21.0256 7.16466Z"
            fill="#32065B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.9898 15.9435V6.97014L21.0114 0L10.0903 6.93322V24.3519L9.2172 24.865L6.89844 26.2331V28.9836V31.7342L9.2172 33.1023L11.536 34.4704L13.8404 33.1023L15.1573 32.3185L17.0609 33.6724L20.1812 31.8767L16.1592 29.5679V28.9836V26.2331L13.8404 24.865L13.3967 24.5942V8.85133L21.0114 4.2196L28.7979 8.85133V14.1051L31.9898 15.9435Z"
            fill="#A427AF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M158.37 21.9247L164.499 32.0235H160.053L155.966 25.2504L152.098 32.0235H148.012L154.142 22.2086L148.012 12.0692H152.445L156.545 18.8423L160.4 12.0692H164.499L158.37 21.9247Z"
            fill="#32065B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M145.275 12.0528V32.0235H141.343V12.0528H145.275Z"
            fill="#32065B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M143.321 10.7533C142.667 10.7533 142.109 10.5231 141.669 10.0747C141.218 9.61425 141.004 9.05683 141.004 8.39036C141.004 7.72389 141.23 7.15435 141.669 6.706C142.121 6.24552 142.667 6.0274 143.321 6.0274C143.962 6.0274 144.497 6.25764 144.948 6.706C145.4 7.16647 145.614 7.72389 145.614 8.39036C145.614 9.05683 145.388 9.62637 144.948 10.0747C144.497 10.5352 143.962 10.7533 143.321 10.7533Z"
            fill="#32065B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M130.136 12.0825C131.627 12.0825 132.963 12.4016 134.146 13.0397C135.328 13.6778 136.253 14.635 136.921 15.8846C137.59 17.1475 137.924 18.663 137.924 20.4444V32.0235H134.03V21.056C134.03 19.3012 133.606 17.9452 132.758 17.0146C131.91 16.0707 130.753 15.6054 129.275 15.6054C127.81 15.6054 126.641 16.0707 125.78 17.0146C124.919 17.9585 124.495 19.3012 124.495 21.056V32.0235H120.575V12.0564H124.495V14.6483C125.137 13.8373 125.96 13.2125 126.962 12.7605C127.964 12.3085 129.018 12.0825 130.149 12.0825H130.136Z"
            fill="#32065B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M113.402 20.4577C113.376 18.9555 112.843 17.759 111.793 16.855C110.742 15.951 109.451 15.499 107.908 15.499C106.512 15.499 105.301 15.9378 104.304 16.8284C103.306 17.7191 102.707 18.9289 102.521 20.4444H113.389L113.402 20.4577ZM117.645 21.7339C117.645 22.4651 117.592 23.1298 117.499 23.728H102.494C102.614 25.2967 103.199 26.5597 104.237 27.5035C105.288 28.4474 106.565 28.926 108.081 28.926C110.263 28.926 111.806 28.0087 112.71 26.1874H117.1C116.501 27.9954 115.437 29.471 113.881 30.6276C112.325 31.7842 110.396 32.3558 108.095 32.3558C106.219 32.3558 104.53 31.9304 103.053 31.0929C101.563 30.2554 100.406 29.0589 99.5547 27.5301C98.7167 26.0013 98.291 24.2199 98.291 22.1992C98.291 20.1785 98.7034 18.4104 99.5148 16.8683C100.34 15.3395 101.484 14.1564 102.973 13.3188C104.463 12.4813 106.166 12.0692 108.095 12.0692C109.944 12.0692 111.593 12.468 113.043 13.279C114.493 14.0899 115.624 15.2199 116.435 16.6822C117.246 18.1446 117.645 19.8196 117.645 21.7206V21.7339Z"
            fill="#32065B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M89.502 22.2258L98.2405 32.0235H92.946L85.9166 23.5818V32.0235H81.9971V6.0274H85.9166V20.9895L92.903 12.0544H98.339L89.502 22.2258Z"
            fill="#32065B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.5749 28.8196C69.5901 28.8196 70.5282 28.567 71.4149 28.0752C72.3016 27.57 73.0213 26.8255 73.561 25.8285C74.1136 24.8314 74.3835 23.6217 74.3835 22.1992C74.3835 20.7768 74.1136 19.567 73.5867 18.5833C73.0598 17.5995 72.353 16.855 71.492 16.3632C70.6182 15.858 69.6801 15.6187 68.6649 15.6187C67.6496 15.6187 66.7244 15.8713 65.8634 16.3632C65.0024 16.8683 64.3213 17.5995 63.8201 18.5833C63.3189 19.567 63.0619 20.7768 63.0619 22.1992C63.0619 24.313 63.5888 25.9481 64.6297 27.0914C65.6706 28.248 66.9942 28.8196 68.5749 28.8196ZM68.5749 32.3425C66.7886 32.3425 65.1694 31.9171 63.7173 31.0796C62.2651 30.2421 61.1343 29.0456 60.3118 27.5168C59.4894 25.988 59.0781 24.2066 59.0781 22.1859C59.0781 20.1918 59.5022 18.4237 60.3504 16.8816C61.1985 15.3395 62.3551 14.1564 63.8329 13.3188C65.2979 12.4813 66.9428 12.0692 68.7548 12.0692C70.5668 12.0692 72.2117 12.4813 73.6767 13.3188C75.1417 14.1564 76.3111 15.3395 77.1593 16.8816C78.0074 18.4237 78.4315 20.1918 78.4315 22.1859C78.4315 24.18 77.9946 25.9481 77.1207 27.4902C76.2468 29.0323 75.0646 30.2288 73.561 31.0663C72.0575 31.9038 70.3997 32.3292 68.5877 32.3292L68.5749 32.3425Z"
            fill="#32065B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.5455 15.4328V26.4828C53.5455 27.2267 53.7126 27.7677 54.0467 28.0923C54.3808 28.4169 54.9463 28.5792 55.7559 28.5792H58.1718V32.0281H55.0748C53.3013 32.0281 51.952 31.5953 51.0139 30.7297C50.0758 29.8641 49.6003 28.444 49.6003 26.4828V15.4328H47.3643V12.065H49.6003V6.02695H53.5584V12.065H58.1718V15.4328H53.5584H53.5455Z"
            fill="#32065B"
          />
          <path
            d="M50.3555 38.6127C50.3555 38.1482 50.4572 37.7315 50.6608 37.3627C50.8644 36.9892 51.1409 36.6978 51.4905 36.4883C51.8445 36.2789 52.2362 36.1741 52.6654 36.1741C53.1699 36.1741 53.6102 36.2993 53.9863 36.5498C54.3625 36.8003 54.6368 37.1555 54.8094 37.6154H54.0859C53.9576 37.3285 53.7717 37.1076 53.5283 36.9528C53.2894 36.798 53.0017 36.7206 52.6654 36.7206C52.3424 36.7206 52.0525 36.798 51.7959 36.9528C51.5392 37.1076 51.3379 37.3285 51.1918 37.6154C51.0458 37.8977 50.9728 38.2301 50.9728 38.6127C50.9728 38.9906 51.0458 39.3231 51.1918 39.6099C51.3379 39.8923 51.5392 40.1109 51.7959 40.2657C52.0525 40.4205 52.3424 40.4979 52.6654 40.4979C53.0017 40.4979 53.2894 40.4228 53.5283 40.2725C53.7717 40.1177 53.9576 39.8968 54.0859 39.6099H54.8094C54.6368 40.0653 54.3625 40.4182 53.9863 40.6687C53.6102 40.9146 53.1699 41.0376 52.6654 41.0376C52.2362 41.0376 51.8445 40.9351 51.4905 40.7302C51.1409 40.5207 50.8644 40.2315 50.6608 39.8627C50.4572 39.4938 50.3555 39.0772 50.3555 38.6127Z"
            fill="#32065B"
          />
          <path
            d="M56.3126 37.8613C56.4188 37.6473 56.5693 37.4811 56.764 37.3627C56.9631 37.2443 57.2043 37.1851 57.4875 37.1851V37.8271H57.3282C56.6511 37.8271 56.3126 38.2051 56.3126 38.961V40.9966H55.7086V37.2534H56.3126V37.8613Z"
            fill="#32065B"
          />
          <path
            d="M61.3178 37.2534L59.1273 42.7589H58.5034L59.2203 40.9556L57.7533 37.2534H58.4237L59.5654 40.2862L60.6939 37.2534H61.3178Z"
            fill="#32065B"
          />
          <path
            d="M62.5291 37.9433C62.6485 37.7292 62.8255 37.5516 63.0601 37.4105C63.299 37.2647 63.5756 37.1919 63.8898 37.1919C64.2128 37.1919 64.5049 37.2716 64.766 37.431C65.0315 37.5903 65.2395 37.8158 65.3899 38.1072C65.5404 38.3941 65.6156 38.7288 65.6156 39.1113C65.6156 39.4893 65.5404 39.8262 65.3899 40.1222C65.2395 40.4182 65.0315 40.6482 64.766 40.8121C64.5049 40.9761 64.2128 41.058 63.8898 41.058C63.58 41.058 63.3057 40.9875 63.0667 40.8463C62.8322 40.7006 62.653 40.5207 62.5291 40.3067V42.7725H61.925V37.2534H62.5291V37.9433ZM64.9983 39.1113C64.9983 38.829 64.943 38.5831 64.8324 38.3736C64.7217 38.1641 64.5713 38.0047 64.381 37.8954C64.1951 37.7862 63.9894 37.7315 63.7637 37.7315C63.5424 37.7315 63.3366 37.7884 63.1464 37.9023C62.9605 38.0116 62.8101 38.1732 62.695 38.3873C62.5844 38.5967 62.5291 38.8404 62.5291 39.1181C62.5291 39.4005 62.5844 39.6486 62.695 39.8627C62.8101 40.0722 62.9605 40.2338 63.1464 40.3477C63.3366 40.4569 63.5424 40.5116 63.7637 40.5116C63.9894 40.5116 64.1951 40.4569 64.381 40.3477C64.5713 40.2338 64.7217 40.0722 64.8324 39.8627C64.943 39.6486 64.9983 39.3982 64.9983 39.1113Z"
            fill="#32065B"
          />
          <path
            d="M67.1475 37.7657V39.972C67.1475 40.1541 67.1851 40.2839 67.2603 40.3613C67.3356 40.4342 67.4661 40.4706 67.652 40.4706H68.0967V40.9966H67.5524C67.2161 40.9966 66.9639 40.9169 66.7957 40.7575C66.6275 40.5981 66.5435 40.3363 66.5435 39.972V37.7657H66.0722V37.2534H66.5435V36.3107H67.1475V37.2534H68.0967V37.7657H67.1475Z"
            fill="#32065B"
          />
          <path
            d="M70.415 41.058C70.0743 41.058 69.7645 40.9784 69.4857 40.819C69.2113 40.6596 68.9945 40.4342 68.8352 40.1427C68.6803 39.8467 68.6029 39.5052 68.6029 39.1181C68.6029 38.7356 68.6825 38.3986 68.8418 38.1072C69.0056 37.8112 69.2268 37.5858 69.5056 37.431C69.7844 37.2716 70.0964 37.1919 70.4415 37.1919C70.7867 37.1919 71.0987 37.2716 71.3775 37.431C71.6563 37.5858 71.8753 37.8089 72.0346 38.1004C72.1983 38.3918 72.2802 38.7311 72.2802 39.1181C72.2802 39.5052 72.1961 39.8467 72.028 40.1427C71.8642 40.4342 71.6408 40.6596 71.3576 40.819C71.0743 40.9784 70.7602 41.058 70.415 41.058ZM70.415 40.5116C70.6318 40.5116 70.8354 40.4592 71.0257 40.3545C71.216 40.2497 71.3686 40.0926 71.4837 39.8832C71.6032 39.6737 71.6629 39.4187 71.6629 39.1181C71.6629 38.8176 71.6054 38.5626 71.4903 38.3531C71.3753 38.1436 71.2248 37.9888 71.0389 37.8886C70.8531 37.7839 70.6517 37.7315 70.4349 37.7315C70.2136 37.7315 70.0101 37.7839 69.8242 37.8886C69.6428 37.9888 69.4968 38.1436 69.3861 38.3531C69.2755 38.5626 69.2202 38.8176 69.2202 39.1181C69.2202 39.4232 69.2733 39.6805 69.3795 39.89C69.4901 40.0995 69.6362 40.2566 69.8176 40.3613C69.999 40.4615 70.1982 40.5116 70.415 40.5116Z"
            fill="#32065B"
          />
          <path
            d="M78.3953 40.9966L77.7912 40.3681C77.5655 40.6095 77.3244 40.7894 77.0677 40.9078C76.811 41.0216 76.5212 41.0785 76.1982 41.0785C75.8795 41.0785 75.5963 41.0193 75.3485 40.9009C75.1051 40.7825 74.9149 40.6141 74.7777 40.3955C74.6449 40.1769 74.5785 39.9219 74.5785 39.6304C74.5785 39.298 74.6693 39.0066 74.8507 38.7561C75.0365 38.5011 75.3087 38.3007 75.6671 38.155C75.5255 37.982 75.4238 37.8226 75.3618 37.6769C75.2998 37.5311 75.2689 37.3718 75.2689 37.1987C75.2689 36.9984 75.3175 36.8185 75.4149 36.6591C75.5167 36.4952 75.6605 36.3677 75.8464 36.2766C76.0322 36.1855 76.2468 36.14 76.4902 36.14C76.7292 36.14 76.9372 36.1878 77.1142 36.2834C77.2912 36.379 77.4239 36.5134 77.5124 36.6864C77.6009 36.8549 77.6408 37.0439 77.6319 37.2534H77.0279C77.0323 37.0667 76.9814 36.9209 76.8752 36.8162C76.769 36.7069 76.6318 36.6523 76.4637 36.6523C76.2867 36.6523 76.1428 36.7046 76.0322 36.8094C75.926 36.9096 75.8729 37.0393 75.8729 37.1987C75.8729 37.3353 75.9083 37.4674 75.9791 37.5949C76.0543 37.7224 76.1782 37.8795 76.3508 38.0662L77.7315 39.4938L77.851 39.3026L78.3023 38.5239H78.9528L78.4085 39.4938C78.3333 39.6304 78.2448 39.7739 78.143 39.9242L79.1852 40.9966H78.3953ZM76.1982 40.5457C76.4371 40.5457 76.6517 40.4979 76.842 40.4023C77.0367 40.3067 77.2204 40.1587 77.393 39.9583L76.0322 38.5512C75.4658 38.7743 75.1826 39.1272 75.1826 39.6099C75.1826 39.8786 75.2755 40.1018 75.4614 40.2793C75.6516 40.4569 75.8972 40.5457 76.1982 40.5457Z"
            fill="#32065B"
          />
          <path
            d="M84.3683 36.2356V36.7411H83.1072V40.9966H82.5031V36.7411H81.2353V36.2356H84.3683Z"
            fill="#32065B"
          />
          <path
            d="M85.7159 37.8613C85.8221 37.6473 85.9726 37.4811 86.1673 37.3627C86.3664 37.2443 86.6076 37.1851 86.8908 37.1851V37.8271H86.7315C86.0544 37.8271 85.7159 38.2051 85.7159 38.961V40.9966H85.1119V37.2534H85.7159V37.8613Z"
            fill="#32065B"
          />
          <path
            d="M87.3624 39.1113C87.3624 38.7288 87.4376 38.3941 87.5881 38.1072C87.7385 37.8158 87.9443 37.5903 88.2054 37.431C88.4709 37.2716 88.7652 37.1919 89.0882 37.1919C89.4068 37.1919 89.6834 37.2625 89.9179 37.4036C90.1525 37.5448 90.3273 37.7224 90.4423 37.9364V37.2534H91.053V40.9966H90.4423V40.2998C90.3228 40.5184 90.1436 40.7006 89.9047 40.8463C89.6701 40.9875 89.3958 41.058 89.0816 41.058C88.7585 41.058 88.4665 40.9761 88.2054 40.8121C87.9443 40.6482 87.7385 40.4182 87.5881 40.1222C87.4376 39.8262 87.3624 39.4893 87.3624 39.1113ZM90.4423 39.1181C90.4423 38.8358 90.387 38.5899 90.2764 38.3804C90.1657 38.1709 90.0153 38.0116 89.825 37.9023C89.6391 37.7884 89.4334 37.7315 89.2077 37.7315C88.982 37.7315 88.7762 37.7862 88.5904 37.8954C88.4045 38.0047 88.2563 38.1641 88.1456 38.3736C88.035 38.5831 87.9797 38.829 87.9797 39.1113C87.9797 39.3982 88.035 39.6486 88.1456 39.8627C88.2563 40.0722 88.4045 40.2338 88.5904 40.3477C88.7762 40.4569 88.982 40.5116 89.2077 40.5116C89.4334 40.5116 89.6391 40.4569 89.825 40.3477C90.0153 40.2338 90.1657 40.0722 90.2764 39.8627C90.387 39.6486 90.4423 39.4005 90.4423 39.1181Z"
            fill="#32065B"
          />
          <path
            d="M93.846 37.1851C94.2886 37.1851 94.647 37.3239 94.9214 37.6017C95.1957 37.875 95.3329 38.2711 95.3329 38.7903V40.9966H94.7355V38.8791C94.7355 38.5057 94.6448 38.221 94.4634 38.0252C94.2819 37.8249 94.0341 37.7247 93.7199 37.7247C93.4013 37.7247 93.1469 37.8271 92.9566 38.0321C92.7707 38.237 92.6778 38.5353 92.6778 38.9269V40.9966H92.0738V37.2534H92.6778V37.7862C92.7973 37.5949 92.9588 37.4469 93.1624 37.3422C93.3703 37.2374 93.5982 37.1851 93.846 37.1851Z"
            fill="#32065B"
          />
          <path
            d="M97.6073 41.058C97.3285 41.058 97.0785 41.0102 96.8573 40.9146C96.636 40.8144 96.4612 40.6778 96.3329 40.5048C96.2045 40.3272 96.1337 40.1245 96.1205 39.8968H96.7444C96.7621 40.0835 96.8462 40.2361 96.9967 40.3545C97.1515 40.4729 97.3529 40.5321 97.6007 40.5321C97.8308 40.5321 98.0122 40.4797 98.145 40.375C98.2777 40.2702 98.3441 40.1382 98.3441 39.9788C98.3441 39.8149 98.2733 39.6942 98.1317 39.6168C97.9901 39.5348 97.7711 39.4551 97.4746 39.3777C97.2046 39.3048 96.9834 39.232 96.8108 39.1591C96.6426 39.0817 96.4966 38.9701 96.3727 38.8244C96.2532 38.6741 96.1935 38.4783 96.1935 38.237C96.1935 38.0457 96.2488 37.8704 96.3594 37.711C96.4701 37.5516 96.6272 37.4264 96.8307 37.3353C97.0343 37.2397 97.2666 37.1919 97.5277 37.1919C97.9304 37.1919 98.2556 37.2966 98.5034 37.5061C98.7512 37.7156 98.884 38.0025 98.9017 38.3668H98.2977C98.2844 38.1709 98.2069 38.0138 98.0653 37.8954C97.9282 37.777 97.7423 37.7178 97.5078 37.7178C97.2909 37.7178 97.1183 37.7657 96.99 37.8613C96.8617 37.9569 96.7975 38.0822 96.7975 38.237C96.7975 38.3599 96.8351 38.4624 96.9104 38.5444C96.99 38.6218 97.0874 38.6855 97.2024 38.7356C97.3219 38.7812 97.4856 38.8335 97.6936 38.8927C97.9547 38.9656 98.1671 39.0384 98.3308 39.1113C98.4946 39.1796 98.634 39.2843 98.749 39.4255C98.8685 39.5667 98.9305 39.7511 98.9349 39.9788C98.9349 40.1837 98.8796 40.3681 98.7689 40.5321C98.6583 40.696 98.5012 40.8258 98.2977 40.9214C98.0985 41.0125 97.8684 41.058 97.6073 41.058Z"
            fill="#32065B"
          />
          <path
            d="M99.5619 39.1113C99.5619 38.7288 99.6371 38.3941 99.7876 38.1072C99.938 37.8158 100.144 37.5903 100.405 37.431C100.67 37.2716 100.965 37.1919 101.288 37.1919C101.606 37.1919 101.883 37.2625 102.117 37.4036C102.352 37.5448 102.527 37.7224 102.642 37.9364V37.2534H103.253V40.9966H102.642V40.2998C102.522 40.5184 102.343 40.7006 102.104 40.8463C101.87 40.9875 101.595 41.058 101.281 41.058C100.958 41.058 100.666 40.9761 100.405 40.8121C100.144 40.6482 99.938 40.4182 99.7876 40.1222C99.6371 39.8262 99.5619 39.4893 99.5619 39.1113ZM102.642 39.1181C102.642 38.8358 102.587 38.5899 102.476 38.3804C102.365 38.1709 102.215 38.0116 102.025 37.9023C101.839 37.7884 101.633 37.7315 101.407 37.7315C101.182 37.7315 100.976 37.7862 100.79 37.8954C100.604 38.0047 100.456 38.1641 100.345 38.3736C100.235 38.5831 100.179 38.829 100.179 39.1113C100.179 39.3982 100.235 39.6486 100.345 39.8627C100.456 40.0722 100.604 40.2338 100.79 40.3477C100.976 40.4569 101.182 40.5116 101.407 40.5116C101.633 40.5116 101.839 40.4569 102.025 40.3477C102.215 40.2338 102.365 40.0722 102.476 39.8627C102.587 39.6486 102.642 39.4005 102.642 39.1181Z"
            fill="#32065B"
          />
          <path
            d="M105.82 40.5321C106.085 40.5321 106.307 40.4683 106.484 40.3408C106.661 40.2133 106.782 40.0312 106.849 39.7944H107.499C107.411 40.1496 107.236 40.441 106.975 40.6687C106.718 40.8918 106.395 41.0193 106.006 41.0512V41.3927C106.267 41.3882 106.475 41.4451 106.63 41.5635C106.785 41.6819 106.862 41.8504 106.862 42.069C106.862 42.283 106.787 42.4538 106.636 42.5813C106.486 42.7088 106.291 42.7725 106.052 42.7725H105.289V42.3695H105.933C106.079 42.3695 106.185 42.3468 106.251 42.3012C106.322 42.2557 106.358 42.1783 106.358 42.069C106.358 41.9642 106.322 41.8891 106.251 41.8436C106.185 41.798 106.079 41.7753 105.933 41.7753H105.601V41.0444C105.295 41.0125 105.026 40.9146 104.791 40.7507C104.556 40.5822 104.373 40.359 104.24 40.0813C104.112 39.7989 104.048 39.4779 104.048 39.1181C104.048 38.7311 104.123 38.3941 104.273 38.1072C104.424 37.8158 104.632 37.5903 104.897 37.431C105.167 37.2716 105.475 37.1919 105.82 37.1919C106.267 37.1919 106.634 37.3035 106.922 37.5266C107.214 37.7497 107.406 38.0594 107.499 38.4556H106.849C106.787 38.2279 106.665 38.048 106.484 37.9159C106.307 37.7839 106.085 37.7178 105.82 37.7178C105.475 37.7178 105.196 37.8408 104.984 38.0867C104.771 38.3281 104.665 38.6719 104.665 39.1181C104.665 39.569 104.771 39.9173 104.984 40.1632C105.196 40.4091 105.475 40.5321 105.82 40.5321Z"
            fill="#32065B"
          />
          <path
            d="M109.892 41.058C109.551 41.058 109.241 40.9784 108.962 40.819C108.688 40.6596 108.471 40.4342 108.312 40.1427C108.157 39.8467 108.08 39.5052 108.08 39.1181C108.08 38.7356 108.159 38.3986 108.318 38.1072C108.482 37.8112 108.703 37.5858 108.982 37.431C109.261 37.2716 109.573 37.1919 109.918 37.1919C110.263 37.1919 110.575 37.2716 110.854 37.431C111.133 37.5858 111.352 37.8089 111.511 38.1004C111.675 38.3918 111.757 38.7311 111.757 39.1181C111.757 39.5052 111.673 39.8467 111.505 40.1427C111.341 40.4342 111.117 40.6596 110.834 40.819C110.551 40.9784 110.237 41.058 109.892 41.058ZM109.892 40.5116C110.108 40.5116 110.312 40.4592 110.502 40.3545C110.693 40.2497 110.845 40.0926 110.96 39.8832C111.08 39.6737 111.14 39.4187 111.14 39.1181C111.14 38.8176 111.082 38.5626 110.967 38.3531C110.852 38.1436 110.701 37.9888 110.516 37.8886C110.33 37.7839 110.128 37.7315 109.912 37.7315C109.69 37.7315 109.487 37.7839 109.301 37.8886C109.119 37.9888 108.973 38.1436 108.863 38.3531C108.752 38.5626 108.697 38.8176 108.697 39.1181C108.697 39.4232 108.75 39.6805 108.856 39.89C108.967 40.0995 109.113 40.2566 109.294 40.3613C109.476 40.4615 109.675 40.5116 109.892 40.5116ZM108.949 36.8025C108.98 36.5703 109.053 36.3927 109.168 36.2697C109.288 36.1468 109.436 36.0853 109.613 36.0853C109.697 36.0853 109.768 36.1013 109.825 36.1331C109.887 36.1605 109.96 36.2014 110.044 36.2561C110.106 36.3016 110.162 36.3381 110.21 36.3654C110.259 36.3881 110.312 36.3995 110.37 36.3995C110.445 36.3995 110.509 36.3745 110.562 36.3244C110.615 36.2743 110.648 36.2014 110.662 36.1058H111.007C110.98 36.3335 110.907 36.5088 110.788 36.6318C110.668 36.7547 110.52 36.8162 110.343 36.8162C110.259 36.8162 110.184 36.8025 110.117 36.7752C110.055 36.7433 109.985 36.6978 109.905 36.6386C109.834 36.5931 109.777 36.5589 109.732 36.5361C109.693 36.5134 109.644 36.502 109.586 36.502C109.511 36.502 109.447 36.527 109.394 36.5771C109.345 36.6272 109.314 36.7024 109.301 36.8025H108.949Z"
            fill="#32065B"
          />
          <path
            d="M115.87 38.9815C115.87 39.0999 115.863 39.2251 115.85 39.3572H112.943C112.965 39.7261 113.086 40.0152 113.308 40.2247C113.533 40.4296 113.806 40.5321 114.124 40.5321C114.385 40.5321 114.602 40.4706 114.775 40.3477C114.952 40.2201 115.076 40.0517 115.146 39.8422H115.797C115.7 40.2019 115.505 40.4957 115.213 40.7233C114.921 40.9465 114.558 41.058 114.124 41.058C113.779 41.058 113.469 40.9784 113.195 40.819C112.925 40.6596 112.713 40.4342 112.558 40.1427C112.403 39.8467 112.325 39.5052 112.325 39.1181C112.325 38.7311 112.401 38.3918 112.551 38.1004C112.702 37.8089 112.912 37.5858 113.182 37.431C113.456 37.2716 113.77 37.1919 114.124 37.1919C114.469 37.1919 114.775 37.2693 115.04 37.4241C115.306 37.579 115.509 37.793 115.651 38.0662C115.797 38.3349 115.87 38.64 115.87 38.9815ZM115.246 38.8517C115.246 38.6149 115.195 38.4123 115.093 38.2438C114.992 38.0708 114.852 37.941 114.675 37.8545C114.503 37.7634 114.31 37.7178 114.098 37.7178C113.792 37.7178 113.531 37.818 113.314 38.0184C113.102 38.2188 112.98 38.4965 112.949 38.8517H115.246Z"
            fill="#32065B"
          />
          <path
            d="M117.955 41.058C117.676 41.058 117.426 41.0102 117.205 40.9146C116.984 40.8144 116.809 40.6778 116.681 40.5048C116.552 40.3272 116.481 40.1245 116.468 39.8968H117.092C117.11 40.0835 117.194 40.2361 117.344 40.3545C117.499 40.4729 117.701 40.5321 117.948 40.5321C118.178 40.5321 118.36 40.4797 118.493 40.375C118.625 40.2702 118.692 40.1382 118.692 39.9788C118.692 39.8149 118.621 39.6942 118.479 39.6168C118.338 39.5348 118.119 39.4551 117.822 39.3777C117.552 39.3048 117.331 39.232 117.158 39.1591C116.99 39.0817 116.844 38.9701 116.72 38.8244C116.601 38.6741 116.541 38.4783 116.541 38.237C116.541 38.0457 116.596 37.8704 116.707 37.711C116.818 37.5516 116.975 37.4264 117.178 37.3353C117.382 37.2397 117.614 37.1919 117.875 37.1919C118.278 37.1919 118.603 37.2966 118.851 37.5061C119.099 37.7156 119.232 38.0025 119.249 38.3668H118.645C118.632 38.1709 118.555 38.0138 118.413 37.8954C118.276 37.777 118.09 37.7178 117.855 37.7178C117.639 37.7178 117.466 37.7657 117.338 37.8613C117.209 37.9569 117.145 38.0822 117.145 38.237C117.145 38.3599 117.183 38.4624 117.258 38.5444C117.338 38.6218 117.435 38.6855 117.55 38.7356C117.67 38.7812 117.833 38.8335 118.041 38.8927C118.302 38.9656 118.515 39.0384 118.679 39.1113C118.842 39.1796 118.982 39.2843 119.097 39.4255C119.216 39.5667 119.278 39.7511 119.283 39.9788C119.283 40.1837 119.227 40.3681 119.117 40.5321C119.006 40.696 118.849 40.8258 118.645 40.9214C118.446 41.0125 118.216 41.058 117.955 41.058Z"
            fill="#32065B"
          />
          <path
            d="M125.41 37.6154C125.281 37.3376 125.095 37.1236 124.852 36.9733C124.609 36.8185 124.325 36.7411 124.002 36.7411C123.679 36.7411 123.387 36.8185 123.126 36.9733C122.87 37.1236 122.666 37.3422 122.516 37.629C122.37 37.9114 122.297 38.2393 122.297 38.6127C122.297 38.9861 122.37 39.3139 122.516 39.5963C122.666 39.8786 122.87 40.0972 123.126 40.252C123.387 40.4023 123.679 40.4774 124.002 40.4774C124.454 40.4774 124.825 40.3385 125.118 40.0608C125.41 39.783 125.58 39.4073 125.629 38.9337H123.783V38.4282H126.273V38.9064C126.237 39.298 126.118 39.6578 125.914 39.9856C125.711 40.3089 125.443 40.5662 125.111 40.7575C124.779 40.9442 124.41 41.0376 124.002 41.0376C123.573 41.0376 123.182 40.9351 122.828 40.7302C122.474 40.5207 122.193 40.2315 121.985 39.8627C121.781 39.4938 121.679 39.0772 121.679 38.6127C121.679 38.1482 121.781 37.7315 121.985 37.3627C122.193 36.9892 122.474 36.7001 122.828 36.4952C123.182 36.2857 123.573 36.1809 124.002 36.1809C124.494 36.1809 124.927 36.3062 125.303 36.5566C125.684 36.8071 125.961 37.16 126.133 37.6154H125.41Z"
            fill="#32065B"
          />
          <path
            d="M127.675 35.9419V40.9966H127.071V35.9419H127.675Z"
            fill="#32065B"
          />
          <path
            d="M130.291 41.058C129.95 41.058 129.641 40.9784 129.362 40.819C129.087 40.6596 128.871 40.4342 128.711 40.1427C128.556 39.8467 128.479 39.5052 128.479 39.1181C128.479 38.7356 128.559 38.3986 128.718 38.1072C128.882 37.8112 129.103 37.5858 129.382 37.431C129.661 37.2716 129.973 37.1919 130.318 37.1919C130.663 37.1919 130.975 37.2716 131.254 37.431C131.532 37.5858 131.751 37.8089 131.911 38.1004C132.074 38.3918 132.156 38.7311 132.156 39.1181C132.156 39.5052 132.072 39.8467 131.904 40.1427C131.74 40.4342 131.517 40.6596 131.234 40.819C130.95 40.9784 130.636 41.058 130.291 41.058ZM130.291 40.5116C130.508 40.5116 130.712 40.4592 130.902 40.3545C131.092 40.2497 131.245 40.0926 131.36 39.8832C131.479 39.6737 131.539 39.4187 131.539 39.1181C131.539 38.8176 131.482 38.5626 131.366 38.3531C131.251 38.1436 131.101 37.9888 130.915 37.8886C130.729 37.7839 130.528 37.7315 130.311 37.7315C130.09 37.7315 129.886 37.7839 129.7 37.8886C129.519 37.9888 129.373 38.1436 129.262 38.3531C129.152 38.5626 129.096 38.8176 129.096 39.1181C129.096 39.4232 129.149 39.6805 129.256 39.89C129.366 40.0995 129.512 40.2566 129.694 40.3613C129.875 40.4615 130.074 40.5116 130.291 40.5116Z"
            fill="#32065B"
          />
          <path
            d="M133.555 37.9501C133.678 37.727 133.86 37.5448 134.099 37.4036C134.338 37.2625 134.61 37.1919 134.915 37.1919C135.243 37.1919 135.537 37.2716 135.798 37.431C136.059 37.5903 136.265 37.8158 136.415 38.1072C136.566 38.3941 136.641 38.7288 136.641 39.1113C136.641 39.4893 136.566 39.8262 136.415 40.1222C136.265 40.4182 136.057 40.6482 135.792 40.8121C135.53 40.9761 135.238 41.058 134.915 41.058C134.601 41.058 134.325 40.9875 134.086 40.8463C133.851 40.7051 133.674 40.5253 133.555 40.3067V40.9966H132.951V35.9419H133.555V37.9501ZM136.024 39.1113C136.024 38.829 135.969 38.5831 135.858 38.3736C135.747 38.1641 135.597 38.0047 135.407 37.8954C135.221 37.7862 135.015 37.7315 134.789 37.7315C134.568 37.7315 134.362 37.7884 134.172 37.9023C133.986 38.0116 133.836 38.1732 133.721 38.3873C133.61 38.5967 133.555 38.8404 133.555 39.1181C133.555 39.4005 133.61 39.6486 133.721 39.8627C133.836 40.0722 133.986 40.2338 134.172 40.3477C134.362 40.4569 134.568 40.5116 134.789 40.5116C135.015 40.5116 135.221 40.4569 135.407 40.3477C135.597 40.2338 135.747 40.0722 135.858 39.8627C135.969 39.6486 136.024 39.3982 136.024 39.1113Z"
            fill="#32065B"
          />
          <path
            d="M137.211 39.1113C137.211 38.7288 137.286 38.3941 137.436 38.1072C137.587 37.8158 137.792 37.5903 138.054 37.431C138.319 37.2716 138.613 37.1919 138.936 37.1919C139.255 37.1919 139.532 37.2625 139.766 37.4036C140.001 37.5448 140.175 37.7224 140.29 37.9364V37.2534H140.901V40.9966H140.29V40.2998C140.171 40.5184 139.992 40.7006 139.753 40.8463C139.518 40.9875 139.244 41.058 138.93 41.058C138.607 41.058 138.315 40.9761 138.054 40.8121C137.792 40.6482 137.587 40.4182 137.436 40.1222C137.286 39.8262 137.211 39.4893 137.211 39.1113ZM140.29 39.1181C140.29 38.8358 140.235 38.5899 140.125 38.3804C140.014 38.1709 139.863 38.0116 139.673 37.9023C139.487 37.7884 139.282 37.7315 139.056 37.7315C138.83 37.7315 138.624 37.7862 138.439 37.8954C138.253 38.0047 138.104 38.1641 137.994 38.3736C137.883 38.5831 137.828 38.829 137.828 39.1113C137.828 39.3982 137.883 39.6486 137.994 39.8627C138.104 40.0722 138.253 40.2338 138.439 40.3477C138.624 40.4569 138.83 40.5116 139.056 40.5116C139.282 40.5116 139.487 40.4569 139.673 40.3477C139.863 40.2338 140.014 40.0722 140.125 39.8627C140.235 39.6486 140.29 39.4005 140.29 39.1181Z"
            fill="#32065B"
          />
          <path
            d="M142.234 36.6454C142.119 36.6454 142.021 36.6044 141.942 36.5225C141.862 36.4405 141.822 36.3403 141.822 36.2219C141.822 36.1035 141.862 36.0034 141.942 35.9214C142.021 35.8394 142.119 35.7984 142.234 35.7984C142.345 35.7984 142.437 35.8394 142.513 35.9214C142.592 36.0034 142.632 36.1035 142.632 36.2219C142.632 36.3403 142.592 36.4405 142.513 36.5225C142.437 36.6044 142.345 36.6454 142.234 36.6454ZM142.526 37.2534V40.9966H141.922V37.2534H142.526Z"
            fill="#32065B"
          />
          <path
            d="M144.843 41.058C144.564 41.058 144.314 41.0102 144.093 40.9146C143.872 40.8144 143.697 40.6778 143.569 40.5048C143.44 40.3272 143.37 40.1245 143.356 39.8968H143.98C143.998 40.0835 144.082 40.2361 144.232 40.3545C144.387 40.4729 144.589 40.5321 144.837 40.5321C145.067 40.5321 145.248 40.4797 145.381 40.375C145.514 40.2702 145.58 40.1382 145.58 39.9788C145.58 39.8149 145.509 39.6942 145.368 39.6168C145.226 39.5348 145.007 39.4551 144.71 39.3777C144.44 39.3048 144.219 39.232 144.047 39.1591C143.878 39.0817 143.732 38.9701 143.609 38.8244C143.489 38.6741 143.429 38.4783 143.429 38.237C143.429 38.0457 143.485 37.8704 143.595 37.711C143.706 37.5516 143.863 37.4264 144.067 37.3353C144.27 37.2397 144.502 37.1919 144.764 37.1919C145.166 37.1919 145.491 37.2966 145.739 37.5061C145.987 37.7156 146.12 38.0025 146.138 38.3668H145.534C145.52 38.1709 145.443 38.0138 145.301 37.8954C145.164 37.777 144.978 37.7178 144.744 37.7178C144.527 37.7178 144.354 37.7657 144.226 37.8613C144.098 37.9569 144.033 38.0822 144.033 38.237C144.033 38.3599 144.071 38.4624 144.146 38.5444C144.226 38.6218 144.323 38.6855 144.438 38.7356C144.558 38.7812 144.721 38.8335 144.929 38.8927C145.191 38.9656 145.403 39.0384 145.567 39.1113C145.73 39.1796 145.87 39.2843 145.985 39.4255C146.104 39.5667 146.166 39.7511 146.171 39.9788C146.171 40.1837 146.115 40.3681 146.005 40.5321C145.894 40.696 145.737 40.8258 145.534 40.9214C145.334 41.0125 145.104 41.058 144.843 41.058Z"
            fill="#32065B"
          />
        </svg>
      </div>
      <h1
        style="
          font-weight: 400;
          font-size: 24px;
          line-height: 29px;
          text-align: center;
        "
      >
        Hi, <b> ${userName}</b>
      </h1>
      <div
        style="
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          justify-content: center;
        "
      >
        <div>
          You are being invited to register on Tokenix. Complete your
          registration by
        </div>
        <div>clicking the button below.</div>
      </div>

      <div
        id="button"
        style="display: flex; justify-content: center; margin-top: 40px"
      >
        <a
          href="${tokenLink}"
          style="
            display: inline-block;
            padding: 14px 60px;
            background-color: #03a600;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 18px;
            line-height: 24px;
            font-weight: 700;
          "
          >Click here to complete your registration.</a
        >
      </div>
    </div>
  </body>
</html>
`;
}
