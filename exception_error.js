try {
  console.log('スタート')
  throw new Error('エラーメッセージ')
} catch (e) {
  console.log(e)
} finally {
  console.log('終了')
}

console.log('########### fetchUsers ##############')

// カスタムエラー
class NoDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "ノーデータエラー"
  }
}

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/userss')

  if (res.ok) {
    const json = await res.json()
    return json
  }
  throw new NoDataError('エラーーーー')
}

async function init() {
  try {
    const users = await fetchUsers()
    users.forEach((user) => console.log(`user name: ${user.name}`))
  } catch (e) {
    console.error(e)
  } finally {
    console.log('init() 終了')
  }
}
init()