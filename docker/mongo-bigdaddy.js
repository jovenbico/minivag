//rs.reconfig({
rs.initiate({
   _id : "bigdaddy",
   version : 1,
   members: [
      { _id: 0, host: "doc-v-mongo1:27017", priority: 1 },
      { _id: 1, host: "doc-v-mongo2:27017", priority: 0.5 }
   ]
}, { force: true});
