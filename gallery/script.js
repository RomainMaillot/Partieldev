class GalleryImage
{
    constructor($container)
    {
        this.$container = $container
        this.isBig = false

        this.event()
    }

    event()
    {
        this.$container.addEventListener(
            'click',
            () =>
            {
                if(this.isBig)
                {
                    this.goLittle()
                }
                else
                {
                    this.goBig()
                }
            }
        )
        window.addEventListener(
            'keydown',
            (_event) =>
            {
                if(_event.keyCode == 27 && this.isBig)
                {
                    this.goLittle()
                }
            }
        )
    }

    goBig()
    {
        this.isBig = true
        this.$container.style.opacity = "0"
        this.$container.parentNode.classList.remove('image--container--small')
        this.$container.parentNode.classList.add('image--container--large')
        this.$container.src = this.$container.dataset.large
        setTimeout(() => {
            this.$container.classList.add('image--large')
            this.$container.style.opacity = "1"
        }, 100)
    }

    goLittle()
    {
        this.isBig = false
        this.$container.style.opacity = "0"
        setTimeout(() => {
            this.$container.src = this.$container.dataset.small
            this.$container.classList.remove('image--large')
            this.$container.parentNode.classList.remove('image--container--large')
            this.$container.parentNode.classList.add('image--container--small')
            this.$container.style.opacity = "1"
        }, 300)
    }
}