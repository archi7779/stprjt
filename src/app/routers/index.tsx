import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import AppLayout from "@app/layouts/AppLayout";
const WorkspaceApp = lazy(() => import("@apps/workspaceapp"));

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     errorElement: <ErrorBoundary />,
//     children: [
//        {
//         path: 'app/workspace',  // Префикс для всех workspace роутов
//         element: (
//           <Suspense fallback={<LoadingSpinner />}>
//               <ProtectedRoute>
//                   <WorkspaceApp />
//               </ProtectedRoute>
//           </Suspense>
//         ),
//       },
//       {
//         path: '*',
//         lazy: () => import('../pages/NotFoundPage'),
//       },
//     ]
//   }
// ])
// TODO: сделать красивый верхний варинат
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    errorElement: <div>Ошибка11</div>,
    children: [
      {
        index: true,
        element: <div>Home Page</div>,
      },
      {
        path: "app/*",
        element: (
          <Suspense fallback={<div>LOADING</div>}>
            <WorkspaceApp />
          </Suspense>
        ),
      },
      // {
      //   path: '*',
      //   lazy: () => import('../pages/NotFoundPage'),
      // },
    ],
  },
]);
