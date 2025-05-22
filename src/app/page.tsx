const mockUrls = [
  "https://ra7874ss0o.ufs.sh/f/lMpGqRCC6ybPsa5nv5LnOiDV4XpeGZ8LQxM3gb0EWI6l2aUc",
  "https://ra7874ss0o.ufs.sh/f/lMpGqRCC6ybPRqPaLLZVBFpvEYPsZyXDeJHd9QqTAgIWN250",
  "https://ra7874ss0o.ufs.sh/f/lMpGqRCC6ybP0Q18f4gRfVDAorwXUSLkO3vT7F6cjpzaY28M",
  "https://ra7874ss0o.ufs.sh/f/lMpGqRCC6ybP0yl4FMgRfVDAorwXUSLkO3vT7F6cjpzaY28M",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (Gallery in Progress)
    </main>
  );
}
