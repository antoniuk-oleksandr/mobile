export const loadMore = (
    hasNextPage: boolean | undefined,
    isFetchingNextPage: boolean,
    fetchNextPage: () => void,
) => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
};