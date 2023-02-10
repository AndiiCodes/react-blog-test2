// import  client  from "@sanity/client";

// export default client ({
//     projectId: "fde8kt2g",
//     dataset: "production",
//     apiVersion: "2023-01-10",
//     useCdn: true,
// });



import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "fde8kt2g",
  dataset: "production",
  useCdn: true,
  apiVersion: '2023-02-10',
});

export default client;
