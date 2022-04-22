const redis = require("redis");

//Connect to redis
const redisClient = redis.createClient(
  10848,
  "redis-10848.c212.ap-south-1-1.ec2.cloud.redislabs.com",
  { no_ready_check: true }
);
redisClient.auth("9onUb7Geyf1pxUXD26nECOm0fCWpSwJZ", function (err) {
  if (err) throw err;
});

redisClient.on("connect", async function () {
  console.log("Connected to Redis..");
});

  module.exports = {redisClient}