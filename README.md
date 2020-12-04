# drownthesky

Discover the universe each day with different photographs by astronomers.

## Built with

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com/)

## Deployment

This project is deployed to [Vercel](https://vercel.com/).

## Develop

Follow the prerequisites in order to run this project on your local machine.

### Clone

```
git clone https://github.com/earvinpiamonte/drownthesky.git
```

```
cd drownthesky
```

### Prerequisites

1. Register to NASA [Open API](https://api.nasa.gov) to get an API key.
1. Create a `.env.local` file on the root directory of this project.
1. Add a `NEXT_PUBLIC_NASA_API_KEY` environment variable.
   eg.

```
NEXT_PUBLIC_NASA_API_KEY=generated_key_provided_by_nasa
```

Replace the `generated_key_provided_by_nasa` with the API key from your NASA Open API account.

### Run local development server

```
npm i
```

```
npm run dev
```

## Maintainer

This project is developed and maintained by [@earvinpiamonte](https://twitter.com/earvinpiamonte).

## Credits

- `useApi` hook inspired by [https://gist.github.com/nico-martin/24de5872c5afc641df5f73c3ae6ee762](https://gist.github.com/nico-martin/24de5872c5afc641df5f73c3ae6ee762).

- NASA [Open API](https://api.nasa.gov).
- Project name `drownthesky` is inspired by the song [Drown the Sky](https://www.youtube.com/watch?v=2rZ38L4rMT4) by William Black.
