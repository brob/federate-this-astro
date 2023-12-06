---
title: Movies Routes

---

You can either query by the iMDB ID of a movie or by a movie title string. If you query by title string, you can add `?title=true` to the end of the query to get a movie that matches the title string. Title needs to be precise or else you'll get a movie you don't expect or a 404.


```bash
GET /api/omdb/movies/:imdbId
```

[Example](/api/omdb/movies/tt2015381)

```bash
GET /api/omdb/movies/:titleString?title=true
```

[Example](/api/omdb/movies/Guardians%20of%20the%20Galaxy?title=true)

## Possible SDL

```graphql


type Data { 
  Title: String
  Year: String
  Rated: String
  Released: String
  Runtime: String
  Genre: String
  Director: String
  Writer: String
  Actors: String
  Plot: String
  Language: String
  Country: String
  Awards: String
  Poster: String
  Metascore: String
  imdbRating: String
  imdbVotes: String
  imdbID: String
  Type: String
  DVD: String
  BoxOffice: String
  Production: String
  Website: String
  Response: String
  Ratings: [Ratings ] 
}

type Ratings { 
  Source: String 
  Value: String 
}

type MovieMeta { 
  data: Data 
}
```