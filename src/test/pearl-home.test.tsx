import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";

describe("Pearl Dental Clinic home page", () => {
  it("renders the real clinic home page on /", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const home = router.matchRoutes("/").at(-1);

    expect(home?.routeId).not.toBe("__root__");
    expect(home?.options.head?.({} as never)).toEqual(
      expect.objectContaining({
        meta: expect.arrayContaining([
          expect.objectContaining({ title: "Pearl Dental Clinic | A little more at ease" }),
          expect.objectContaining({ property: "og:type", content: "website" }),
          expect.objectContaining({ name: "twitter:card", content: "summary_large_image" }),
        ]),
      }),
    );
  });
});