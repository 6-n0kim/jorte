import { useState } from 'react';
import api from '../api/axiosInstance';

interface TestData {
    message: string;
    status: string;
}

const BackendTest = () => {
    const [data, setData] = useState<TestData | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const fetchBackendStatus = async () => {
        setLoading(true);
        try {
            // 백엔드의 '/api/test' 엔드포인트 호출 가정
            const response = await api.get<TestData>('/api/test');
            setData(response.data);
            setError('');
        } catch (err: any) {
            setError(err.message || '백엔드 연결에 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>🔌 백엔드 연결 테스트</h2>
            <button onClick={fetchBackendStatus} disabled={loading}>
                {loading ? '연결 중...' : '데이터 가져오기'}
            </button>

            <div style={{ marginTop: '20px' }}>
                {data && (
                    <div style={{ color: 'green' }}>
                        <p><strong>메시지:</strong> {data.message}</p>
                        <p><strong>상태:</strong> {data.status}</p>
                    </div>
                )}
                {error && <p style={{ color: 'red' }}>⚠️ 에러: {error}</p>}
            </div>
        </div>
    );
};

export default BackendTest;