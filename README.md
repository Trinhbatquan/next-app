### A.Trong ứng dụng Next.js, bạn không cần phải có một file index.html riêng lẻ vì Next.js tự động tạo và quản lý các trang HTML cho bạn. Thay vì sử dụng index.html, Next.js sử dụng một cơ chế mô-đun JavaScript để xây dựng các trang HTML động.

### Cách Next.js hoạt động là:

#### 1.Pages Directory: Next.js xác định cấu trúc routing dựa trên cấu trúc thư mục trong thư mục pages. Mỗi file JavaScript (hoặc TypeScript) trong thư mục này tự động trở thành một trang web. Ví dụ, pages/index.js sẽ là trang chính khi bạn truy cập trang gốc.

#### 2.Server-side Rendering (SSR): Next.js cung cấp khả năng Server-side Rendering (SSR) cho các trang của bạn. Khi một yêu cầu đến, Next.js sẽ thực hiện việc xử lý SSR và tạo nội dung HTML tương ứng.

#### 3.Bộ xử lý trang HTML động: Thay vì sử dụng một file HTML tĩnh như index.html, Next.js sử dụng một bộ xử lý trang HTML động để tạo ra các trang HTML dựa trên nội dung của trang và các thành phần React của bạn.

#### 4.File \_document.tsx: Nếu bạn muốn tùy chỉnh cấu trúc HTML chung của trang, bạn có thể sử dụng file \_document.tsx. Next.js sẽ sử dụng nó để định nghĩa HTML gốc và đánh vào các thẻ <head> chung cho toàn bộ trang web.

#### 5.Client-side Navigation: Next.js sử dụng JavaScript để xử lý client-side navigation (điều hướng trên máy khách) để tải các trang khác mà không cần tải lại toàn bộ trang.

#### =>Vì vậy, không cần phải có một file index.html riêng lẻ bởi vì Next.js tự động tạo và quản lý nội dung HTML cho từng trang dựa trên cấu trúc dự án của bạn và các thành phần React bạn định nghĩa trong các trang của mình.

### B.Khi bạn truy cập một URL trên trình duyệt, Next.js sẽ xác định trang tương ứng dựa trên cấu trúc thư mục trong thư mục pages. Ví dụ, nếu bạn truy cập URL /about, Next.js sẽ tìm và thực thi file pages/about.tsx hoặc pages/about/index.tsx nếu đó là một trang có phân đoạn. Sau khi trang được xử lý, Next.js sẽ sử dụng file \_app.tsx (nếu nó tồn tại) để bọc nội dung của trang trong ứng dụng tổng quan. Điều này cho phép bạn tùy chỉnh cách ứng dụng của bạn được hiển thị trên toàn bộ trang web (cách xử lý routing trong next.js).

### C.File-system Routing: Khi một file được thêm vào trong thư mục pages, nó tự động có sẵn một route. Có 3 loại routes:

#### 1.Index routes: file có tên là index sẽ mặc định được hiển thị đầu tiên.

#### 2.Nested routes: các thư mục lồng nhau trong pages sẽ có các route khác nhau theo thứ tự lần lượt.

#### 3.Dynamic routes: linh hoạt route với các parameters.

##### a.Single parameter: pages/posts/[postId].tsx (tương tự như pages/posts/:id của react).

##### b.Multiple parameters: pages/category/[categoryId]/posts/[postId].tsx.

##### c.Catch all routes: pages/posts/[...params].tsx.

##### | Priority | Path | Code |

##### | :---: | :---: | :---: |

##### | 1 | pages/posts/create.tsx | A |

##### | :---: | :---: | :---: |

##### | 2 | pages/posts/[postId].tsx | B |

##### | :---: | :---: | :---: |

##### | 3 | pages/posts/[...params].tsx | C |

##### => /post/create(A); /posts/123(B); /posts/12345/comments (C).

##### => Sử dụng router từ useRouter() để get route và query (đối với parameters) của đường dẫn hiện tại.
