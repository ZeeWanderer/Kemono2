/**
 * @param {string} name 
 * @param {string} url 
 * @returns 
 */
function getParameterByName (name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * @param {() => void} func 
 * @param {number} wait 
 * @param {boolean} immediate 
 * @returns {void}
 */
function debounce (func, wait, immediate) {
  let timeout;
  return function () {
    var context = this; 
    var args = arguments;
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);

    function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }
  };
}

/**
 * Iterate over the list of images
 * and add `image_link` class
 * if they are a descendant of an `a` element
 * and don't have that class already.
 * @param {HTMLImageElement[] | HTMLCollectionOf<HTMLImageElement>} imageElements
 */
export function fixImageLinks(imageElements) {
  const images = Array.from(imageElements);

  images.forEach((image) => {
    const link = image.closest("a");

    if (
      link 
      // && !image.nextSibling 
      // && !image.previousSibling
      // TODO: fix this later
      && !link.classList.contains("user-header__profile")
      && !link.classList.contains("image-link")
    ) {
      link.classList.add("image-link");
    }
  });
};

export const paysites = {
  patreon: {
    title: "Patreon"
  },
  fanbox: {
    title: "Pixiv Fanbox"
  },
  subscribestar: {
    title: "SubscribeStar"
  },
  gumroad: {
    title: "Gumroad"
  },
  discord: {
    title: "Discord"
  },
  dlsite: {
    title: "DLsite"
  },
  fantia: {
    title: "Fantia"
  },
};

export const freesites = {
  kemono: {
    title: "Kemono",
    user: {
      /**
       * @param {string} service 
       * @param {string} artistID 
       */
      profile: (service, artistID) => `/${service}/${service === 'discord' ? 'server' : 'user'}/${artistID}`,
      /**
       * @param {string} service 
       * @param {string} artistID 
       * @returns 
       */
      icon: (service, artistID) => `/icons/${service}/${artistID}`,
    },
    post: {}
    
  }
}
