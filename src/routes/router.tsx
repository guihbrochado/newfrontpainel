import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from '@/routes/PrivateRoute';
import OtherLayout from '@/layouts/OtherLayout';
import AdminLayout from '@/layouts/AdminLayout';
import { appRoutes, authRoutes } from '@/routes/index';

const AppRouter = () => {
  return (
    <Routes>
      {/* 🔹 Rotas Públicas */}
      {(authRoutes || []).map((route, idx) => (
        <Route key={idx + route.name} path={route.path} element={<OtherLayout>{route.element}</OtherLayout>} />
      ))}

      {/* 🔹 Rotas Protegidas */}
      <Route element={<PrivateRoute />}>
        {(appRoutes || []).map((route, idx) => (
          <Route key={idx + route.name} path={route.path} element={<AdminLayout>{route.element}</AdminLayout>} />
        ))}
      </Route>

      {/* 🔹 Rota Padrão para Redirecionamento */}
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  );
};

export default AppRouter;