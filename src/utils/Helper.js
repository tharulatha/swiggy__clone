
 export  function filterData(searchText, restaurants) {
        // => Here we are filtering the restaurant which inclueds that names ans returning it
        // => Then in onclicking on 'search' it will give data to the 'setRestaurant' and
        // => that 'setRestaurant' will give data to the 'restaurant'
        // => it will map based on the restaurant and render()
        return restaurants.filter((restaurant) =>
          restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
        );
      }
