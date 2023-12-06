---
title: Movies Routes

---




```http
GET /api/omdb/movies/:imdbId
```

[Example](/api/omdb/movies/tt2015381)

```http
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