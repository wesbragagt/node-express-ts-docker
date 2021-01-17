export function successResponse (res, data, statusCode = 200) {
  return res.status(statusCode).json({ success: true, data })
}

export function errorResponse (
  res,
  error = new Error('invalid operation'),
  statusCode = 500
) {
  console.log('ERROR:', error)
  return res.status(statusCode).json({ success: false, error: error.message })
}
