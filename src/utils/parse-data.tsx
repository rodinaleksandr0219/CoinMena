import { RepositoryTypes, DeveloperTypes } from "./types";

export const parseRepositoryData = (
  data: Array<any>
): Array<RepositoryTypes> => {
  return data.map((item: any) => ({
    repositoryName: item["repositoryName"],
    username: item["username"],
    url: item["url"],
    totalStars: item["totalStars"],
    starsSince: item["starsSince"],
    since: item["since"],
    rank: item["rank"],
    languageColor: item["languageColor"],
    language: item["language"],
    forks: item["forks"],
    description: item["description"],
    builtBy: item["builtBy"].map((bItem: any) => ({
      username: bItem["username"],
      url: bItem["url"],
      avatar: bItem["avatar"],
    })),
  }));
};

export const parseDeveloperData = (data: Array<any>): Array<DeveloperTypes> => {
  return data.map((item: any) => ({
    name: item["name"],
    username: item["username"],
    rank: item["rank"],
    since: item["since"],
    url: item["url"],
    avatar: item["avatar"],
    popularRepository: item["popularRepository"],
  }));
};
