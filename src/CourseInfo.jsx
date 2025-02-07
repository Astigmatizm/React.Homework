import styles from './CourseInfo.module.css';

function CourseInfo() {
  return (
    <div> 
        <p>
            <h1><strong>Курс по React: Погружение в разработку веб-приложений</strong></h1>
            <br />
            <p className={styles.parag}><strong>Модуль 1: Введение в React</strong></p>

            <p className={styles.parag}>1. Что такое React?  </p> 
            <p className={styles.parag}>--- История и предназначение. </p> 
            <p className={styles.parag}>--- Преимущества использования React. </p> 
            <p className={styles.parag}>2. Установка и настройка окружения.</p>  
            <p className={styles.parag}>--- Node.js и npm.</p>  
            <p className={styles.parag}>--- Установка Create React App.</p>
            <p className={styles.parag}>3. Основы JSX.</p>  
            <p className={styles.parag}>--- Что такое JSX?  </p>
            <p className={styles.parag}>--- Синтаксис и принципы работы.  </p>
            
            <br />

            <p className={styles.parag}><strong>Модуль 2: Основы компонентов</strong></p>
            <p className={styles.parag}>1. Функциональные и классовые компоненты.  </p>
            <p className={styles.parag}>2. Пропсы и их использование.  </p>
            <p className={styles.parag}>3. Состояние (state) в React.  </p>
            <p className={styles.parag}>4. Жизненный цикл компонентов.  </p>

            <br />

            <p className={styles.parag}><strong>Модуль 3: Работа с событиями и данными</strong></p>
            <p className={styles.parag}>1. Обработка событий в React.  </p>
            <p className={styles.parag}>2. Работа с формами и управляемыми компонентами.</p>  
            <p className={styles.parag}>3. Списки и ключи.  </p>

            <br />

            <p className={styles.parag}><strong>Модуль 4: React Hooks</strong></p>
            <p className={styles.parag}>1. Что такое Hooks?  </p>
            <p className={styles.parag}>2. useState и useEffect.</p>  
            <p className={styles.parag}>3. Дополнительные хуки (useContext, useReducer и др.).</p>  

            <br />

            <p className={styles.parag}><strong>Модуль 5: Управление состоянием</strong></p>
            <p className={styles.parag}>1. Введение в Context API.</p>  
            <p className={styles.parag}>2. Flux и Redux: основы и сравнение.</p>  
            <p className={styles.parag}>3. Redux Toolkit: современный подход.</p>  


            <p className={styles.parag}><strong>Модуль 6: Работа с внешними данными</strong></p>
            <p className={styles.parag}>1. REST API и fetch/axios.</p>  
            <p className={styles.parag}>2. Асинхронные запросы и их обработка.</p>  
            <p className={styles.parag}>3. Использование библиотеки React Query.</p>  

            <br />

            <p className={styles.parag}><strong>Модуль 7: Оптимизация и продвинутые техники</strong></p>
            <p className={styles.parag}>1. Code splitting и lazy loading.</p> 
            <p className={styles.parag}>2. Мемоизация (React.memo, useMemo, useCallback).</p>  
            <p className={styles.parag}>3. Оптимизация производительности.</p>  

            <br />

            <p className={styles.parag}><strong>Модуль 8: Роутинг в React</strong></p>
            <p className={styles.parag}>1. React Router: основы.</p>  
            <p className={styles.parag}>2. Динамические маршруты. </p> 
            <p className={styles.parag}>3. Работа с защищенными маршрутами.</p>  

            <br />

            <p className={styles.parag}><strong>Модуль 9: Стилизация приложений</strong></p>
            <p className={styles.parag}>1. CSS Modules и Styled Components.</p>  
            <p className={styles.parag}>2. Библиотеки стилей (Material-UI, Tailwind CSS).</p>  

            <br />

            <p className={styles.parag}><strong>Модуль 10: Деплой приложения</strong></p>
            <p className={styles.parag}>1. Подготовка приложения к продакшену.</p>  
            <p className={styles.parag}>2. Деплой на Netlify, Vercel или GitHub Pages.</p>  

            <br />

            <p className={styles.parag}><strong>Практическая часть: </strong></p>
            <p className={styles.parag}>Создание To-Do приложения:</p> 
            <p className={styles.parag}>- Управление задачами.  </p>
            <p className={styles.parag}>- Фильтрация по статусу.</p>  
            <p className={styles.parag}>- Сохранение данных на сервере.</p>  

            <p className={styles.parag}>Создание более сложного приложения:</p>  
            <p className={styles.parag}>- Интернет-магазин с каталогом, корзиной и авторизацией.</p>   
        </p>

        



          
    </div>
  );
}

export default CourseInfo;
