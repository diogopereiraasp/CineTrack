import { TMDB_IMAGE_BASE_URL, TMDBImageSize } from "@/services/api/constants";

export function getImageUrl(path?: string | null, size: TMDBImageSize = TMDBImageSize.MEDIUM): string | undefined {
    if (!path) return undefined;
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
}