---
title: Dev.to routes
description: "Routes that access article lists from Dev.to"
---


```http
GET /api/devto/articles/:username
```

[Example](/api/devto/articles/brob)

```http
GET /api/devto/article/:id
```
[Example](/api/devto/article/1168033)

### Potential SDL

```graphql

type Article {
    type_of: String
    id: Int
    title: String
    description: String
    cover_image: String
    readable_publish_date: String
    social_image: String
    tag_list: [String]
    tags: String
    slug: String
    path: String
    url: String
    canonical_url: String
    comments_count: Int
    positive_reactions_count: Int
    public_reactions_count: Int
    collection_id: Int
    created_at: String
    edited_at: String
    crossposted_at: String
    published_at: String
    last_comment_at: String
    published_timestamp: String
    body_html: String
    body_markdown: String
    user: User
}

type User {
    name: String
    username: String
    twitter_username: String
    github_username: String
    website_url: String
    profile_image: String
    profile_image_90: String
}

type Articles {
    data: [Article]
}
         