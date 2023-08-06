import { FC, useLayoutEffect, useRef } from "react";
import Loader from "../Loader/Loader";

interface ILoadMore {
  action: () => void;
  isLoading?: boolean;
  isEndOfList?: boolean;
}

export const LoadMore: FC<ILoadMore> = ({ action, isLoading, isEndOfList }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Используем useLayoutEffect для того, чтобы зарегистрировать
  // observer до того момента, когда разметка отобразиться на экране
  useLayoutEffect(() => {
    let observer: IntersectionObserver | undefined = undefined;

    // Если мы не достигли конца списка, то запускаем инициализацию
    // IntersectionObserver
    if (!isEndOfList) {
      // Определяем настройка для будущего наблюдателя
      // Читай доку https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
      const options: IntersectionObserverInit = {
        threshold: 0.5,
      };

      // Функция, которая будет вызываться каждый раз, когда элемент будет
      // появляться на экране и исчезать
      const callback: IntersectionObserverCallback = (entries) => {
        // Для того чтобы отследить именно появление элемента в области видимости,
        // используем свойство isIntersecting
        if (entries[0].isIntersecting) {
          // запускаем пользовательскую логику
          action();
        }
      };
      // создаем экземпляр класса IntersectionObserver
      observer = new IntersectionObserver(callback, options);

      // Если ссылка есть, то начинаем наблюдать за нашим элементом
      ref.current && observer.observe(ref.current);
    }

    return () => {
      // Перед последующем запуском useLayoutEffect перестаем следить
      // за всеми элементами
      observer && observer.disconnect();
    };
  }, [action, isEndOfList]);

  return (
    <div ref={ref} style={{ height: "100px", width: "100%" }}>
      {isLoading && <Loader />}
      {isEndOfList && <div>End of list!</div>}
    </div>
  );
};
