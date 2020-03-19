# line-push-message

<p align="left">
  <a href="https://github.com/ufoo68/line-push-message"><img alt="GitHub Actions status" src="https://github.com/ufoo68/line-push-message/workflows/LINE%20push%20message/badge.svg"></a>
</p>

LINE push message action using GitHub actions

## Usage

* Example

```yml
on: [push]

jobs:
  line_push_message_job:
    runs-on: ubuntu-latest
    name: LINE push message
    steps:
    - name: Push LINE message
      uses: ufoo68/line-push-message@v1.4
      with:
        user-id: ${{ secrets.USER_ID }}
        message: 'test'
        channel-access-token: ${{ secrets.CHANNEL_ACCESS_TOKEN }}
```
