import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  canonicalPath?: string;
};

const SITE_URL = "https://ozkayabilisim.com.tr";
const DEFAULT_IMAGE = `${SITE_URL}/images/magaza2.webp`;

function setMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setPropertyMeta(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url: string) {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

function normalizePath(path: string) {
  if (path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export default function Seo({
  title,
  description,
  canonicalPath = "/",
}: SeoProps) {
  useEffect(() => {
    const normalizedPath = normalizePath(canonicalPath);
    const canonicalUrl = `${SITE_URL}${normalizedPath}`;

    document.title = title;

    setMeta("description", description);
    setMeta("robots", "index, follow");

    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:locale", "tr_TR");
    setPropertyMeta("og:site_name", "Özkaya Bilişim");
    setPropertyMeta("og:title", title);
    setPropertyMeta("og:description", description);
    setPropertyMeta("og:url", canonicalUrl);
    setPropertyMeta("og:image", DEFAULT_IMAGE);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", DEFAULT_IMAGE);

    setCanonical(canonicalUrl);
  }, [title, description, canonicalPath]);

  return null;
}