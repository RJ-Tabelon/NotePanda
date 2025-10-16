// Rate limiting temporarily disabled
// Reason: Redis/Upstash expired; disabling to restore app functionality
// TODO(RJ): Re-enable by restoring the original implementation below and
// ensuring Upstash Redis credentials are valid.

// import ratelimit from '../config/upstash.js';

// const rateLimiter = async (req, res, next) => {
//     try {
//         const { success } = await ratelimit.limit('my-limit-key');
//
//         if (!success) {
//             return res
//                 .status(429)
//                 .json({ message: 'Too many requests, please try again later' });
//         }
//
//         next();
//     } catch (error) {
//         console.log('Rate limit error', error);
//         next(error);
//     }
// };

// export default rateLimiter;

const disabledRateLimiter = async (req, res, next) => {
  // No-op middleware while rate limiting is disabled
  return next();
};

export default disabledRateLimiter;
