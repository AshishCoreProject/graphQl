export let games = [
  {
    id: "1",
    title: "mario",
    platform: ["Switch"],
  },
  {
    id: "2",
    title: "GTA VI",
    platform: ["PS5", "XBOX"],
  },
  {
    id: "3",
    title: "Last of Us",
    platform: ["PC", "XBOX", "PS5"],
  },
  {
    id: "4",
    title: "Spider-Man",
    platform: ["PC", "PS5"],
  },
  {
    id: "5",
    title: "God of War",
    platform: ["PC", "XBOX", "PS5"],
  },
];

export let authors = [
  { id: 1, name: "", verified: true },
  { id: 2, name: "Rockstar", verified: true },
  { id: 1, name: "Marvel", verified: true },
];

export let reviews = [
  {
    id: "1",
    rating: 10,
    content: "lorem Ipseum",
    game_id: "1",
    author_id: "1",
  },
  { id: "3", rating: 9, content: "lorem Ipseum", game_id: "2", author_id: "2" },
  { id: "4", rating: 7, content: "lorem Ipseum", game_id: "3", author_id: "3" },
  { id: "5", rating: 8, content: "lorem Ipseum", game_id: "4", author_id: "4" },
];
