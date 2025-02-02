import { KemonoError } from "@wp/utils";
import { kemonoFetch } from "./kemono-fetch";

/**
 * @type {KemonoAPI.Favorites}
 */
export const favorites = {
  retrieveFavoriteArtists,
  favoriteArtist,
  unfavoriteArtist,
  retrieveFavoritePosts,
  favoritePost,
  unfavoritePost
};

async function retrieveFavoriteArtists() {
  const params = new URLSearchParams([
    ["type", "artist"]
  ]).toString();

  try {
    const response = await kemonoFetch(`/api/favorites?${params}`);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    /**
     * @type {string}
     */
    const favs = await response.text();
    return favs;
    
  } catch (error) {
    alert(error);
  }

}

/**
 * @param {string} service 
 * @param {string} userID 
 */
async function favoriteArtist(service, userID) {
  try {
    const response = await kemonoFetch(
      `/favorites/artist/${service}/${userID}`, 
      { method: "POST" }
    );

    if (!response.ok) {
      alert(new KemonoError(3));
      return false;
    }
    
    return true;

  } catch (error) {
    alert(error);
  }
}

/**
 * @param {string} service 
 * @param {string} userID 
 */
async function unfavoriteArtist(service, userID) {
  try {
    const response = await kemonoFetch(
      `/favorites/artist/${service}/${userID}`, 
      { method: "DELETE" }
    );

    if (!response.ok) {
      alert(new KemonoError(4));
      return false;
    }
    
    return true;

  } catch (error) {
    alert(error);
  }
}

async function retrieveFavoritePosts() {
  const params = new URLSearchParams([
    ["type", "post"]
  ]).toString();

  try {
    const response = await kemonoFetch(`/api/favorites?${params}`);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    /**
     * @type {string}
     */
    const favs = await response.text();
    return favs;
    
  } catch (error) {
    alert(error);
  }
}

/**
 * @param {string} service 
 * @param {string} user 
 * @param {string} post_id 
 */
async function favoritePost(service, user, post_id) {
  try {
    const response = await kemonoFetch(
      `/favorites/post/${service}/${user}/${post_id}`,
      { method: 'POST' }
    );

    if (!response.ok) {
      alert(new KemonoError(1));
      return false;
    }

    return true;

  } catch (error) {
    alert(error);
  }
}

/**
 * @param {string} service 
 * @param {string} user 
 * @param {string} post_id 
 */
async function unfavoritePost(service, user, post_id) {
  try {
    const response = await kemonoFetch(
      `/favorites/post/${service}/${user}/${post_id}`, 
      { method: "DELETE" }
    );

    if (!response.ok) {
      alert(new KemonoError(2));
      return false;
    }

    return true;

  } catch (error) {
    alert(error);
  }
}
