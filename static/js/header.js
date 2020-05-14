const configHeader = () => {
  const header = document.getElementById('main-header');
  const toogle = header.querySelector('#sidebar-toggle');
  const navlinks = header.querySelector('.nav-links');
  const behaviors = ['mixed', 'normal', 'sticky'];
  let config;

  try {
    config = JSON.parse(header.dataset.config);
    header.removeAttribute('data-config');
  } catch (error) {
    return;
  }

  const {
    behavior,
    bg_color,
    bg_color_class,
    text_color,
    text_color_class,
  } = config;

  // Add config classes
  bg_color_class && header.classList.add(bg_color_class);
  text_color_class && header.classList.add(text_color_class);

  // Add config styles
  header.style.color = text_color;
  header.style.backgroundColor = bg_color;

  if (!behavior || behavior === 'normal' || !behaviors.includes(behavior)) {
    return;
  }

  if (behavior === 'sticky') {
    header.classList.add('sticky', 'top-0');
  }

  if (behavior === 'mixed') {
    // Remove config values
    bg_color_class && header.classList.remove(bg_color_class);
    header.style.backgroundColor = '';

    header.classList.add('absolute');

    const main = document.getElementById('main-content');
    const thresholdElement = main.children[0];

    if (!thresholdElement) {
      return;
    }

    const computedThresholdElementPT = window
      .getComputedStyle(thresholdElement)
      .getPropertyValue('padding-top');

    const thresholdElementPT = parseInt(
      computedThresholdElementPT.slice(0, -2),
      10
    );

    const headerHeight = header.offsetHeight;

    if (headerHeight > thresholdElementPT) {
      thresholdElement.style.paddingTop = `${
        thresholdElementPT + headerHeight
      }px`;
    }

    const observer = new IntersectionObserver((entries) => {
      const observedEntry = entries[0];
      if (observedEntry.isIntersecting) {
        // Stay on top without styles
        header.classList.remove('fixed');
        header.classList.add('absolute');
        bg_color_class && header.classList.remove(bg_color_class);
        header.style.backgroundColor = '';
      } else {
        // Come with me, styled please.
        header.classList.remove('absolute');
        header.classList.add('fixed');
        bg_color_class && header.classList.add(bg_color_class);
        header.style.backgroundColor = bg_color;
      }
    });

    observer.observe(thresholdElement);
  }

  // Sidebar toggle
  toogle.addEventListener('click', (e) => {
    header.classList.toggle('is-active');
    navlinks.classList.toggle('is-active');

    if (
      header.classList.contains('is-active') &&
      header.classList.contains('absolute')
    ) {
      bg_color_class && header.classList.add(bg_color_class);
      header.style.backgroundColor = bg_color;
    } else if (
      !header.classList.contains('is-active') &&
      header.classList.contains('absolute')
    ) {
      bg_color_class && header.classList.remove(bg_color_class);
      header.style.backgroundColor = '';
    }

    if (navlinks.classList.contains('is-active')) {
      bg_color_class && navlinks.classList.add(bg_color_class);
      navlinks.style.backgroundColor = bg_color;
    } else {
      bg_color_class && navlinks.classList.remove(bg_color_class);
      navlinks.style.backgroundColor = '';
    }
  });
};

window.addEventListener('load', configHeader);
