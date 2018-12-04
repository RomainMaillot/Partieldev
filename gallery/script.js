class GalleryImage
{
    constructor($container)
    {
        this.$container = $container
        this.isBig = false

        this.click()
    }

    click()
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
        }, 300)
    }

    goLittle()
    {
        this.isBig = false
        this.$container.src = this.$container.dataset.small
        this.$container.classList.remove('image--large')
        this.$container.parentNode.classList.remove('image--container--large')
        this.$container.parentNode.classList.add('image--container--small')
    }
}