const { useState, useEffect } = React;
const Slider = window.Slider;

// Komponen Card
function Card({ name, role, img }) {
    return (
        <div className="card">
            <img src={img} alt={`${name}`} />
            <h4>{name}</h4>
            <p>{role}</p>
        </div>
    );
}

// Komponen CardList
function CardList({ cards }) {
    return (
        <div className="card-list">
            {cards.map(card => (
                <Card key={card.id} name={card.name} role={card.role} img={card.img} />
            ))}
        </div>
    );
}

// Komponen Header
function Header({ onOpenPopUp }) {
    return (
        <header>
            <h3>DEWAN SYURO</h3>
            <button id="toggle-btn" onClick={onOpenPopUp}>Tampilkan Pengurus</button>
            <p id="toggle-btn-p">Dewan Syuro FOSSI - FT</p>
        </header>
    );
}

// Komponen PopUp
function PopUp({ onClose, onToggleTeam }) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h4>Pilih Tahun:</h4>
                <button className="execute-btn" onClick={() => onToggleTeam('2023')}>
                    Tampilkan DS 2023
                </button>
                <button className="execute-btn" onClick={() => onToggleTeam('2024')}>
                    Tampilkan DS 2024
                </button>
                <button className="close-btn" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

// Komponen utama App
function App() {
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const [teamYear, setTeamYear] = useState('2023'); // default to 2023
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const [cards2023, setCards2023] = useState([]);
    const [cards2024, setCards2024] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            const data2023 = [
                { id: 1, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                // More data...
            ];
            const data2024 = [
                { id: 3, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                // More data...
            ];
            setCards2023(data2023);
            setCards2024(data2024);
        };

        fetchCards();
    }, []);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleOpenPopUp = () => {
        setIsPopUpVisible(true);
    };

    const handleClosePopUp = () => {
        setIsPopUpVisible(false);
    };

    const handleToggleTeam = (year) => {
        setTeamYear(year);
        setIsPopUpVisible(false);
    };

    return (
        <div className="App">
            <Header onOpenPopUp={handleOpenPopUp} />
            <div id="team-2023" className="team" style={{ display: teamYear === '2023' ? 'flex' : 'none' }}>
                <CardList cards={cards2023} />
            </div>
            <div id="team-2024" className="team" style={{ display: teamYear === '2024' ? 'flex' : 'none' }}>
                <CardList cards={cards2024} />
            </div>
            {isPopUpVisible && (
                <PopUp onClose={handleClosePopUp} onToggleTeam={handleToggleTeam} />
            )}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Gaya CSS untuk PopUp dan App
const styles = `
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .popup-content {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .execute-btn, .close-btn {
        display: inline-block;
        margin: 10px;
        padding: 10px 20px;
        background-color: #007BFF;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    .execute-btn:hover, .close-btn:hover {
        background-color: #0056b3;
    }

    .card {
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 8px;
        text-align: center;
        margin: 10px;
        background-color: #f9f9f9;
    }

    .card img {
        width: 100px;
        height: 100px;
        border-radius: 10%;
        object-fit: cover;
    }

    .card-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    header {
        text-align: center;
        margin-bottom: 20px;
    }

    #toggle-btn {
        background-color: #28a745;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    #toggle-btn:hover {
        background-color: #218838;
    }
`;

// Tambahkan gaya CSS ke dokumen
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
