import * as axios from "axios";
import * as $ from "cheerio";

export async function getPageTitle(url: string) {
  const response = await axios.get<string>(url);
  return $("title", response.data).text();
};