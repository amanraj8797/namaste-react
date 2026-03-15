import React from "react";
import ReactDOM from "react-dom/client";


const heading = <h1>Foodie</h1>

const Header = () => (
  <div className="header">
    <div className="header-left">
      {heading}
      <img alt="app-logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/36b6e461906217.5a7d98bb75356.jpg" className="header-img"/>
    </div>
    <div className="header-right">
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Content</h3>
      <h3>Cart</h3>
    </div>

  </div>
)

// using config driven UI
const Restaurants = (props) => {

  // can simply use them as props.resName, props.cusine and so on
  // const {resName, cusine, deliveryTime, imgURL} = props;

  const {resObj} = props;

  // optional chaining
  const {name, cuisines, avgRating, locality, cloudinaryImageId, sla } = resObj?.info;

  return (
    <div className="restaurant-x">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} className="res-img" alt="restaurant image" />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h3>{sla.deliveryTime} to deliver</h3>
      <h3>{locality}</h3>
    </div>
  )
}

// resturent list data
const resList = [
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
  "id": "1214376",
                                            "name": "Royal Bites Restaurant",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/9/9d4e3d6c-28b1-4653-937d-a2d91411e8ab_1214376 (1).jpg",
                                            "locality": "Greater Mohali",
                                            "areaName": "Greater Mohali",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Indian",
                                                "Beverages",
                                                "Snacks",
                                                "Fast Food",
                                                "North Indian"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "431907",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "32",
                                            "sla": {
                                                "deliveryTime": 39,
                                                "lastMileTravel": 1.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "35-40 mins",
                                                "lastMileTravelString": "1.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-03-15 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹9"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "isNewlyOnboarded": true,
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5d14c0d7-8271-4bb8-a3db-a8330b45d7a5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chandigarh/royal-bites-restaurant-greater-mohali-rest1214376",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "1221142",
                                            "name": "Muskan Dhaba",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/29/0e23cc1c-f4aa-4a38-ad9a-504f41847af5_1221142.jpg",
                                            "locality": "Gharuan Mohali",
                                            "areaName": "Gharuan Mohali",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Grill"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "352575",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "<3",
                                            "sla": {
                                                "deliveryTime": 39,
                                                "lastMileTravel": 1.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "35-40 mins",
                                                "lastMileTravelString": "1.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-03-15 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "40% OFF",
                                                "subHeader": "UPTO ₹80"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "isNewlyOnboarded": true,
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5d14c0d7-8271-4bb8-a3db-a8330b45d7a5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chandigarh/muskan-dhaba-gharuan-mohali-rest1221142",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "772027",
                                            "name": "McDonald's",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/dfd8b2d0-03a2-430e-b6ef-a2f9f6efa82f_772027.JPG",
                                            "locality": "Amayra Emporio",
                                            "areaName": "Kharar",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "American",
                                                "Fast Food",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "630",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "3.6K+",
                                            "sla": {
                                                "deliveryTime": 52,
                                                "lastMileTravel": 11.3,
                                                "serviceability": "SERVICEABLE_WITH_BANNER",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "11.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextOpenTimeMessage": "Currently not taking orders for this location",
                                                "nextCloseTime": "2026-03-16 01:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹129"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5d14c0d7-8271-4bb8-a3db-a8330b45d7a5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chandigarh/mcdonalds-amayra-emporio-kharar-rest772027",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "571149",
                                            "name": "La Pino'z Pizza",
                                            "cloudinaryImageId": "dwra6yqwgdevkfobkid2",
                                            "locality": "Greater Mohali",
                                            "areaName": "Kharar",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Italian",
                                                "Pastas",
                                                "Mexican",
                                                "Desserts",
                                                "Beverages",
                                                "Snacks",
                                                "Combos",
                                                "Fast Food"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "4961",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "3.6K+",
                                            "sla": {
                                                "deliveryTime": 51,
                                                "lastMileTravel": 9,
                                                "serviceability": "SERVICEABLE_WITH_BANNER",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "9.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextOpenTimeMessage": "Currently not taking orders for this location",
                                                "nextCloseTime": "2026-03-15 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹69"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5d14c0d7-8271-4bb8-a3db-a8330b45d7a5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chandigarh/la-pinoz-pizza-greater-mohali-kharar-rest571149",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "640360",
                                            "name": "KFC",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/36fb4603-86ff-4b69-9659-3555340b83c1_640360.JPG",
                                            "locality": "Nirwana Square",
                                            "areaName": "Chandigarh-Ropar Road",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "Fast Food",
                                                "Rolls & Wraps"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "547",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "4.3K+",
                                            "sla": {
                                                "deliveryTime": 55,
                                                "lastMileTravel": 9.3,
                                                "serviceability": "SERVICEABLE_WITH_BANNER",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "9.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextOpenTimeMessage": "Currently not taking orders for this location",
                                                "nextCloseTime": "2026-03-16 03:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5d14c0d7-8271-4bb8-a3db-a8330b45d7a5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chandigarh/kfc-nirwana-square-chandigarh-ropar-road-rest640360",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "340854",
                                            "name": "Pizza Hut",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/a0ed44cf-7667-4a1b-a1ef-f65582d0ddea_340854.JPG",
                                            "locality": "Janta Nagar",
                                            "areaName": "Janta Nagar",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Pizzas"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "721",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "5.5K+",
                                            "sla": {
                                                "deliveryTime": 59,
                                                "lastMileTravel": 10.1,
                                                "serviceability": "SERVICEABLE_WITH_BANNER",
                                                "slaString": "55-65 mins",
                                                "lastMileTravelString": "10.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextOpenTimeMessage": "Currently not taking orders for this location",
                                                "nextCloseTime": "2026-03-16 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.6",
                                                    "ratingCount": "1.7K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5d14c0d7-8271-4bb8-a3db-a8330b45d7a5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chandigarh/pizza-hut-janta-nagar-rest340854",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "621593",
                                            "name": "Subway",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/2fdd8907-089d-4f55-bb09-b2a5a9385f81_621593.jpg",
                                            "locality": "Kharar",
                                            "areaName": "Amayra City Center",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "sandwich",
                                                "Salads",
                                                "wrap",
                                                "Healthy Food"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "2",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "1.6K+",
                                            "sla": {
                                                "deliveryTime": 55,
                                                "lastMileTravel": 9.8,
                                                "serviceability": "SERVICEABLE_WITH_BANNER",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "9.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextOpenTimeMessage": "Currently not taking orders for this location",
                                                "nextCloseTime": "2026-03-15 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "High%20Protein/rx%20tag%205.png",
                                                        "description": "High Protein"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "High Protein",
                                                                    "imageId": "High%20Protein/rx%20tag%205.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹150 OFF",
                                                "subHeader": "ABOVE ₹299",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5d14c0d7-8271-4bb8-a3db-a8330b45d7a5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chandigarh/subway-kharar-amayra-city-center-rest621593",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "1207358",
                                            "name": "Burger King",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/16/e5cd934f-e9f7-456e-8e87-2b602bf5ecff_1207358.jpg",
                                            "locality": "Village Dau Majra, Kharar",
                                            "areaName": "Amayra Plaza, Ropar-Chandigarh Road",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "American"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "166",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "495",
                                            "sla": {
                                                "deliveryTime": 57,
                                                "lastMileTravel": 12.3,
                                                "serviceability": "SERVICEABLE_WITH_BANNER",
                                                "slaString": "55-65 mins",
                                                "lastMileTravelString": "12.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextOpenTimeMessage": "Currently not taking orders for this location",
                                                "nextCloseTime": "2026-03-16 02:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹59"
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "isNewlyOnboarded": true,
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-5d14c0d7-8271-4bb8-a3db-a8330b45d7a5"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chandigarh/burger-king-village-dau-majra-kharar-amayra-plaza-ropar-chandigarh-road-rest1207358",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    }
                                ]

const Body = () => {
  return (
    <div className="body">
      <div className="body-search">search here
        <button className="search-btn">Search</button>
      </div>
      <div className="res-container">

        {/* ==== passing single single value to props */}

        {/* <Restaurants resName="KFC" deliveryTime="38 min" imgURL="https://tse1.mm.bing.net/th/id/OIP.gdC3Vkcr2NOgVEIYQ_gOaQHaE8?pid=Api&P=0&h=180" cusine="Fries, burger, roll" />

        <Restaurants resName="behrouz biryani" deliveryTime="26 min" imgURL="https://b.zmtcdn.com/data/pictures/5/19667425/5becbaadd1ade90bdb8d1920f2db4be9.jpg" cusine="briyani" /> */}

        {/* =====  This is also repeating multiple times, meaning that this part is redundant, so we use map to do so*/}
        {/* So when ever we use map or we are dealing with multiple same level child component, we give an id to each component as key which help in optimization of code and helps in not to rerender the previous code again */}
        {/* not using key(not acceptable <<<<< index as key <<<< unique id ( best practice ) ) */}
        {resList.map((resturent, idx) => (
          <Restaurants key={resturent.info.id} resObj={resturent}/>
        ))}

      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <h4>Copyright</h4>
      <h4>Links</h4>
      <h4>Address</h4>
      <h4>Contact</h4>
    </div>
  )
}
const App = () => (
  <>
  <Header />
  <Body />
  <Footer />
  </>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);