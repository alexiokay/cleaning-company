export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const { storyId, reaction } = body;

  console.log("storyId", storyId);
  console.log("reaction", reaction);

  const headers = {
    Authorization: config.STORYBLOK_MAPI_TOKEN,
    "Content-Type": "application/json",
  };
  // First, fetch the current story data
  fetch(`https://mapi.storyblok.com/v1/spaces/246369/stories/${storyId}`, {
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Modify the content object to update 'like' property
      let updatedContent = {
        ...data.story.content, // Preserve existing content
        [reaction]: (Number(data.story.content[reaction]) || 0) + 1, // Increment the specified reaction count
      };

      // Prepare the payload to send for update
      let payload = {
        story: {
          name: data.story.name, // Optionally update name if needed
          slug: data.story.slug, // Optionally update slug if needed
          id: storyId,
          content: updatedContent,
        },
        force_update: 1,
        publish: 1,
      };

      // Now send the updated data back to Storyblok
      return fetch(
        `https://mapi.storyblok.com/v1/spaces/246369/stories/${storyId}`,
        {
          method: "PUT",
          body: JSON.stringify(payload),
          headers: headers,
        }
      );
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Updated story:", data);
    })
    .catch((error) => {
      console.error("Error updating story:", error);
    });
});
